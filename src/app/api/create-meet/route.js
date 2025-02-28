import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {

    const userData = await req.json(); // This gets the entire object with 'user' property

    if (!userData || !userData.user) {
        console.log('User data', userData);
        return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const user = userData.user; // Access the actual 'user' object

    try {
        console.log(user); // Now this will log the correct 'user' object

        const auth = new google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: process.env.GOOGLE_REDIRECT_URI,
        });

        auth.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        });

        const calendar = google.calendar({ version: 'v3', auth });

        let [hours, minutes] = user.meetingTime.split(':');
        hours = parseInt(hours) + 1;
        hours = hours.toString().padStart(2, '0');

        let endTime = `${hours}:${minutes}`;

        const event = {
            summary: `Meeting With ${user.name}`,
            description: "We'll be happy joining you, be ready to discuss your future study plans",
            start: {
                dateTime: user.meetingDate + 'T' + user.meetingTime + ':00',
                timeZone: 'UTC',
            },
            end: {
                dateTime: user.meetingDate + 'T' + endTime + ':00',
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

        const meetData = response.data;
        return new Response(JSON.stringify({ meetData: meetData }), { status: 200 });
    } catch (error) {
        console.error('Error creating event:', error);
        return new Response(JSON.stringify({ error: 'Failed to create event' }), { status: 500 });
    }
}
