import Cookies from 'js-cookie';
import { client } from '../../lib/sanityClient';
import jwt from 'jsonwebtoken';

export async function POST(req) {

    const { token } = await req.json();

    if (!token) {
        return new Response(JSON.stringify({ message: 'Unable to retrieve authorization token' }), { status: 400 });
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

                return new Response(JSON.stringify({ message: 'Token is no longer available , please resubmit verification' }), { status: 400 });
            }
            else {

                if (user.meetingType !== 'Online') {
                    try {
                        client
                            .patch(user._id)
                            .set({ verified: true, token: '' })
                            .commit();

                        Cookies.set("lastVerificationTime", Date.now().toString());
                        return new Response(JSON.stringify({ error: 'User has been successfully verified', user: user}), { status: 200 });
                    } catch (err) {
                        return new Response(JSON.stringify({ error: 'Unable to verify user', message: err.message }), { status: 500 });
                    }
                }


                try {
                    const baseUrl = process.env.NEXT_PUBLIC_URL;
                    await fetch(`${baseUrl}/api/create-meet`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name: user.name, email: user.email }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            try {
                                client
                                    .patch(user._id)
                                    .set({ verified: true, token: '' , meetingLink : data.meetData.url})
                                    .commit();

                                Cookies.set("lastVerificationTime", Date.now().toString());
                                return new Response(JSON.stringify({ error: 'User has been successfully verified', user: user, meetingData: data.meetData }), { status: 200 });
                            } catch (err) {
                                return new Response(JSON.stringify({ error: 'Unable to verify user', message: err.message }), { status: 500 });
                            }

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                } catch (err) {
                    console.log(err);
                    return new Response(JSON.stringify({ message: 'Unable to create meeting link', }), { status: 500 });
                }

            }
        }


    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid or expired token', message: err }), { status: 400 });
    }
}
