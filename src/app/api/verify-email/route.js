import { getCookie } from 'cookies-next';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    // Retrieve cookies (Next.js App Router doesn't use 'res' directly in cookies-next)
    const storedToken = getCookie('verificationToken', { req });
    const storedEmail = getCookie('clientEmail', { req });

    if (!storedToken || !storedEmail) {
        return new Response(
            JSON.stringify({ error: 'Verification token or email not found in cookies' }),
            { status: 400 }
        );
    }

    if (token === storedToken && email === storedEmail) {
        return new Response(
            JSON.stringify({ message: 'Email verified successfully!' }),
            { status: 200 }
        );
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
