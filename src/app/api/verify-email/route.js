import Cookies from 'js-cookie';
import { client } from '../../lib/sanityClient';
import jwt from 'jsonwebtoken';

export async function POST(req) {

    const url = new URL(req.url);

    const token = url.searchParams.get('token');


    if (!token) {
        return new Response(JSON.stringify({ error: 'Unable to retrieve authorization token' }), { status: 400 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const currentTime = Math.floor(Date.now() / 1000);
        const tokenAge = currentTime - decoded.iat;

        const user = await client.fetch(`*[_type == "user" && token == $token][0]`, {
            token: token,
        });


        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        } else {
            if (tokenAge > 24 * 60 * 60) {

                await client
                    .patch(user._id)
                    .set({ token: '' })
                    .commit();

                return new Response(JSON.stringify({ error: 'Token is no longer available , please resubmit verification' }), { status: 400 });
            }
            else {
                try {
                    const baseUrl = `${req.headers.get('x-forwarded-proto') || 'http'}://${req.headers.get('host')}`;
                    const response = await fetch(`${baseUrl}/api/create-meet`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name: user.name, email: user.email  }),
                    });


                    try {
                        await client
                            .patch(user._id)
                            .set({ verified: true, token: '' })
                            .commit();

                        Cookies.set("lastVerificationTime", Date.now().toString());

                        return new Response(JSON.stringify({ error: 'User has been successfully verified', }), { status: 200 });
                    } catch (err) {
                        return new Response(JSON.stringify({ error: 'Unable to verify user', message: err.message }), { status: 500 });
                    }


                } catch (err) {
                    console.log(err);
                    return new Response(JSON.stringify({ error: 'Unable to create meeting link', }), { status: 500 });
                }

            }
        }


    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid or expired token', message: err }), { status: 400 });
    }
}
