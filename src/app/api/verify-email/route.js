// src/app/api/verify-email/route.js

import { client } from '../../lib/sanityClient';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(req) {
    const { token } = await req.json();

    if (!token) {
        return new Response(JSON.stringify({ message: 'Token missing' }), { status: 400 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const tokenAge = Math.floor(Date.now() / 1000) - decoded.iat;

        const user = await client.fetch(`*[_type == "user" && token == $token][0]`, { token });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        if (tokenAge > 24 * 60 * 60) {
            await client.patch(user._id).set({ token: '' }).commit();
            return new Response(JSON.stringify({ message: 'Token expired, please request a new verification link' }), { status: 400 });
        }

        const baseUrl = process.env.NEXT_PUBLIC_URL;

        const response = await fetch(`${baseUrl}/api/create-meet`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user }),
        });

        const data = await response.json();

        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Meeting creation failed', details: data }), { status: 500 });
        }

        await client
            .patch(user._id)
            .set({
                verified: true,
                token: '',
                meetingUrl: data.meetData?.hangoutLink || data.meetData?.htmlLink || ''
            })
            .commit();



        return new Response(JSON.stringify({
            message: 'Verification successful',
            userId: user._id,
            user : user
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid or expired token', details: err.message }), { status: 400 });
    }
}
