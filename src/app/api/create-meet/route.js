import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';

export async function POST({ req }) {


    const userData = { ...req.body }
    
    
    try {
        const auth = new google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: process.env.GOOGLE_REDIRECT_URI,
        });

        auth.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        });

        const calendar = google.calendar({ version: 'v3', auth });

        const event = {
            summary: 'Meeting With StudyAbroad Agency',
            description: "We'll be happy joining you , be ready to discuss your future study plans",
            start: {
                dateTime: new Date().toISOString(),
                timeZone: 'UTC',
            },
            end: {
                dateTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
                timeZone: 'UTC',
            },
            conferenceData: {
                createRequest: {
                    requestId: uuidv4(),
                    conferenceSolutionKey: {
                        type: 'hangoutsMeet',
                    },
                },
            },
        };

        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        // Return the Google Meet link
        const meetData = response.data;
        return new Response(JSON.stringify({ meetData }), { status: 200 });
    } catch (error) {
        console.error('Error creating event:', error);
        return new Response(JSON.stringify({ error: 'Failed to create event' }), { status: 500 });
    }
}