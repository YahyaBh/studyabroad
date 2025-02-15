import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(request) {

    const { clientEmail } = await request.json();

    if (!clientEmail) {
        return NextResponse.json({ error: 'Client email is required' }, { status: 400 });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');


    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {

            user: 'bohsineyahya@gmail.com',
            pass: 'zehy rxev weyz ycab'
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: 'bohsineyahya@gmail.com',
            to: clientEmail,
            subject: `Website activity from ${verificationToken}`,
            html: `
                Hello
                <a href="${process.env.NEXT_PUBLIC_URL}/api/verify-email?token=${verificationToken}">VERIFY YOUR EMAIL</a>
                `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
}
