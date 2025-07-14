// src/app/api/create-meet/route.js

import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
    const { user } = await req.json();

    if (!user || !user.name || !user.meetingDate || !user.meetingTime) {
        return new Response(JSON.stringify({ message: 'Missing user data for meeting' }), { status: 400 });
    }

    try {
        const auth = new google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: process.env.GOOGLE_REDIRECT_URI,
        });

        auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

        const calendar = google.calendar({ version: 'v3', auth });

        const [startHour, startMinute] = user.meetingTime.split(':');
        const endHour = String(Number(startHour) + 1).padStart(2, '0');
        const endTime = `${endHour}:${startMinute}`;

        const event = {
            summary: `Meeting With ${user.name}`,
            description: `Discussion about studies with ${user.name} (${user.email})`,
            start: {
                dateTime: `${user.meetingDate}T${user.meetingTime}:00Z`,
                timeZone: 'UTC',
            },
            end: {
                dateTime: `${user.meetingDate}T${endTime}:00Z`,
                timeZone: 'UTC',
            },
            conferenceData: {
                createRequest: {
                    requestId: uuidv4(),
                    conferenceSolutionKey: { type: 'hangoutsMeet' },
                },
            },
            attendees: [
                { email: user.email }
            ],
        };

        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        return new Response(JSON.stringify({ meetData: response.data }), { status: 200 });

    } catch (error) {
        console.error('Google Calendar API Error:', error.response?.data || error.message);
        return new Response(JSON.stringify({
            error: 'Failed to create Google Calendar event',
            details: error.response?.data || error.message,
        }), { status: 500 });
    }
}
