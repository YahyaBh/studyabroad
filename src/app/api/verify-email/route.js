import { setCookie } from 'cookies-next';
import { client } from '../../lib/sanityClient';
import jwt from 'jsonwebtoken';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unable to retrieve authorization token' }), { status: 400 });
    }

    try {
        console.log('Received token:', token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('Decoded token:', decoded);


        const user = await client.fetch(`*[_type == "user" && token == $token][0]`, {
            token: token,
        });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        setCookie('token', token);

        console.log(user);


        await client
            .patch(user._id)
            .set({ verified: true, token: '' })
            .commit();

        // Redirect the user to the verification success page
        return new Response(null, { status: 302, headers: { Location: `/consultation/verified/${user._id}` } });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid or expired token' }), { status: 400 });
    }
}
