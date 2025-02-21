import { useState } from "react";

export async function GET(req) {
    const [storedToken, setStoredToken] = useState();

    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');


    const fetchUserByToken = async (token) => {
        try {
            const query = `*[_type == "user" && token == $token][0]`;
            const params = { token };

            const user = await client.fetch(query, params); 

            if (user) {
                setStoredToken(user.token);
            } else {
                console.log('No user found with this token');
                return null;
            }
        } catch (error) {
            console.error('Error fetching user by token:', error);
            return null;
        }
    };



    if (storedToken === '') {
        return new Response(
            JSON.stringify({ error: 'Verification token or email not found in cookies' }),
            { status: 400 }
        );
    }

    if (token === storedToken) {
        try {
            // Find the user with the matching token
            const user = await client.fetch(
                `*[_type == "user" && token == $token][0]`,
                { token }
            );

            if (!user) {
                throw new Error('Invalid token');
            }

            // Set the user as verified
            await client.patch(user._id)
                .set({ verified: true, token: null }) // Remove token after verification
                .commit();

            console.log('User verified successfully');

            return new Response(
                JSON.stringify({ message: 'Email verified successfully!' }),
                { status: 200 }
            );
        } catch (error) {
            console.error('Error verifying user:', error);
        }


    } else {
        return new Response(
            JSON.stringify({ error: 'Invalid verification token or email' }),
            { status: 401 } // Unauthorized status
        );
    }
}

export const config = {
    matcher: ['/api/send-verification'],
};
