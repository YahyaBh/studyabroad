import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { readFileSync } from 'fs';

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 400 });
    }

    try {
        const keyFilePath = path.join(process.cwd(), 'src/app/api/create-meet/studyabroadapi-451919-64f2d95608c9.json');
        const credentials = JSON.parse(readFileSync(keyFilePath, 'utf8'));

        const auth = new google.auth.JWT(
            credentials.client_email,
            null,
            credentials.private_key,
            ['https://www.googleapis.com/auth/calendar']
        );

        const calendar = google.calendar({ version: 'v3', auth });

        const event = {
            summary: 'Google Meet Meeting',
            description: 'Automatically created meeting',
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
                    requestId: uuidv4(),
                    conferenceSolutionKey: {
                        type: 'hangoutsMeet',
                    },
                },
            },
        };

        const createdEvent = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        console.log(createdEvent);


        const meetLink = createdEvent.data.conferenceData.entryPoints?.find(
            (entry) => entry.entryPointType === 'video'
        )?.uri;

        if (!meetLink) {
            return new Response(JSON.stringify({ error: 'Unable to generate Meeting Link' }), { status: 405 });
        }

        return new Response(JSON.stringify({ meetLink }), { status: 200 });
    } catch (error) {
        console.error('Error creating meeting:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: error }), { status: 500 });
    }
}
