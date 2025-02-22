import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { client } from '@/app/lib/sanityClient';
import { stringify } from 'querystring';

export async function POST(request) {

    const { user } = await request.json();

    if (!user) {
        return NextResponse.json({ error: 'Something went wrong please try again' }, { status: 400 });
    }

    const verificationToken = crypto.randomBytes(64).toString('hex');


    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {

            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });


    try {
        const newUser = {
            _type: 'user',
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: verificationToken,
            country_chosen: {
                _type: 'reference',
                _ref: user.country._ref,
            },
            level: {
                _type: 'reference',
                _ref: user.study_level._ref,
            },
            field: user.study_field,  
            grade: user.grade,
            meetingDate: user.date,  
            meetingTime: user.time,  
            meetingType: Array.isArray(user.meeting) ? user.meeting : [user.meeting],  // Ensure it's an array
            payment_method: Array.isArray(user.payment) ? user.payment : [user.payment],  // Ensure it's an array
        };

        // Save the new user document in Sanity
        const result = await client.create(newUser);



        try {
            await transporter.sendMail({
                from: process.env.EMAIL,
                to: user.email,
                subject: `BEDAYA EMAIL VERIFICATION REQUIRED`,
                html: `
                    <style>
                        /* Inline styles to ensure compatibility */
                        body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        }
    
                        table {
                        border-spacing: 0;
                        width: 100%;
                        }
    
                        td {
                        padding: 0;
                        }
    
                        .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #dddddd;
                        }
    
                        .header {
                        text-align: center;
                        padding: 20px;
                        background-color: #410071;
                        color: white;
                        }
    
                        .header h1 {
                        margin: 0;
                        font-size: 24px;
                        }
    
                        .content {
                        padding: 20px;
                        text-align: center;
                        color: #333333;
                        }
    
                        .button {
                        display: inline-block;
                        background-color: #410071;
                        color: white;
                        padding: 15px 30px;
                        font-size: 16px;
                        text-decoration: none;
                        border-radius: 5px;
                        }
    
                        .footer {
                        text-align: center;
                        padding: 20px;
                        font-size: 12px;
                        color: #777777;
                        }
    
                        .footer a {
                        color: #410071;
                        text-decoration: none;
                        }
                    </style>
    
    
                    <body>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                        <td align="center">
                            <table role="presentation" class="container">
                            <tr>
                                <td class="header">
                                <h1>Email Verification</h1>
                                </td>
                            </tr>
                            <tr>
                                <td class="content">
                                <p>Hello ${user.name},</p>
                                <p>Thank you for registering. Please verify your email address by clicking the button below.</p>
                                <a href="${process.env.NEXT_PUBLIC_URL}/api/verify-email?token=${verificationToken}" class="button">Verify Email</a>
                                <p>This Emaill will be invalid after 24 hours</p>
                                <p>If you didn’t create an account, you can safely ignore this email.</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="footer">
                                <p>&copy; 2025 BEDAYA. All rights reserved.</p>
                                <p><a href="https://bedaya.com/">Privacy Policy</a> | <a href="https://bedaya.com/contact">Contact Support</a></p>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
                    </body>
                `,
            })

            return NextResponse.json({ message: 'Email sent' })

        } catch (error) {
            return NextResponse.json(user)
        }
    } catch (error) {
        return NextResponse.json({ error: error })
    }


}
