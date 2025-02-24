import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';

export async function POST(req) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
    }

    try {

        // Step 1: Authenticate with OAuth 2.0
        const oauth2Client = new google.auth.OAuth2(
            //process.env.GOOGLE_CLIENT_ID || 
            '391471128274-6k1g1eddn4f768lr06pot8u31k78bbol.apps.googleusercontent.com',
            //process.env.GOOGLE_CLIENT_SECRET || 
            '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',
            //process.env.GOOGLE_REDIRECT_URI || 
            'http://localhost:3000/redirect'
        );

        // Set credentials using the refresh token
        oauth2Client.setCredentials({
            access_token: 'ya29.a0AXeO80S9IbCVYEhb3kM-VM5hbENSNMX1R7Mh3JgKAO44Vsk3Jw-T8I8qbTBqW-yaJ69g9qbvTz-wn7jLySiAlbChKBeMWJX4eDRoQlpKmHEiU-4E1R1eOCiCrlEwK3fpPeSRshtr-Sljo2NxRBHLp4LH6y5SiV6tO4DGrZ3zaCgYKAWQSARMSFQHGX2Mibvohpgu2htVvwBplVZ3XoA0175',
            refresh_token:
                //process.env.GOOGLE_REFRESH_TOKEN || 
                '1//04LMLWasXLn6RCgYIARAAGAQSNwF-L9IrKOQNv2Lt3_0_kzKgZ4wREQnVQwuabLzw__FKgFQT4gjEIhWvyzYH2zESFJ6rjnC5GmQ',
        });

        // Refresh the access token
        const { tokens } = await oauth2Client.refreshAccessToken();
        oauth2Client.setCredentials(tokens);

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // Step 2: Define the event details
        const event = {
            summary: 'Team Meeting',
            description: 'Discuss project updates and next steps.',
            start: {
                dateTime: new Date().toISOString(),
                timeZone: 'America/New_York',
            },
            end: {
                dateTime: new Date(Date.now() + 30 * 60000).toISOString(),
                timeZone: 'America/New_York',
            },
            conferenceData: {
                createRequest: {
                    requestId: `meet-${uuidv4()}`,
                    conferenceSolutionKey: {
                        type: 'hangoutsMeet',
                    },
                },
            },
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 },
                    { method: 'popup', minutes: 30 },
                ],
            },
            colorId: '5',
            sendUpdates: 'all',
            status: 'confirmed',
        };

        // Step 3: Insert the event into the calendar
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        const meetLink = response.data.hangoutLink;

        // Step 4: Send Google Meet link to the user
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'gamesy865@gmail.com',
            subject: 'Your Google Meet Link',
            text: `Here is your Google Meet link: ${meetLink}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Google Meet created and link sent' }), { status: 200 });
    } catch (error) {
        console.error('Error creating meeting:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: error.message }), { status: 500 });
    }
}