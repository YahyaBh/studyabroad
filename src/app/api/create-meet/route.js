import { google } from 'googleapis';
import { readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { cName, date } = req.body;

    if (!cName || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Load service account credentials from JSON file
    const keyFilePath = path.join(process.cwd(), './studyabroad-451010-52c5829f07e0.json');
    const credentials = JSON.parse(readFileSync(keyFilePath, 'utf8'));

    const auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        ['https://www.googleapis.com/auth/calendar']
    );

    const calendar = google.calendar({ version: 'v3', auth });

    // Create event start and end times based on provided date and duration
    const startDateTime = new Date(date);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000); // Add duration in minutes

    const event = {
        summary: `Meeting with ${cName}`,
        description: `Meeting with ${cName}`,
        start: {
            dateTime: startDateTime.toISOString(),
            timeZone: timeZone,
        },
        end: {
            dateTime: endDateTime.toISOString(),
            timeZone: timeZone,
        },
        conferenceData: {
            createRequest: {
                requestId: "random-string", // Make sure this is a unique string for each event
                conferenceSolutionKey: { type: "hangoutsMeet" },
            },
        },
    };

    try {
        const createdEvent = await calendar.events.insert({
            calendarId: 'primary', // Use 'primary' for the default calendar
            resource: event,
            conferenceDataVersion: 1,
        });

        res.status(200).json({
            meetLink: createdEvent.data.hangoutLink,
            eventDetails: createdEvent.data,
        });
    } catch (error) {
        console.error('Error creating event: ', error);
        res.status(500).json({ error: 'Error creating Google Meet event' });
    }
}
