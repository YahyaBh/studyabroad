import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { client } from '@/app/lib/sanityClient';
import EmailVerificationTemplate from './emailTemplate.js'
import * as ReactDOMServer from 'react-dom/server';

const jwt = require('jsonwebtoken');

export async function POST(request) {
	const { user } = await request.json();

	if (!user) {
		return NextResponse.json({ error: 'Something went wrong please try again' }, { status: 400 });
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		port: 587,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});


	try {

		const findEmail = await client.fetch(`*[_type == "user" && email == "${user.email}"]`);

		if (findEmail.length > 0) {
			return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
		} else {


			const formatDate = (ser) => {
				const date = new Date(ser);
				if (!isNaN(date)) {
			
					return date.toISOString().slice(0, 10);
				} else {
					return 'Invalid Date';
				}
			};

			const newUser = {
				_type: 'user',
				name: user.name,
				email: user.email,
				phone: user.phone,
				country_chosen: {
					_type: 'reference',
					_ref: user?.country?._ref || '',
				},
				level: {
					_type: 'reference',
					_ref: user?.study_level?._ref || '',
				},
				field: user.study_field,
				grade: user.grade,
				meetingDate: formatDate(user.date),
				meetingTime: user.time,
				meetingType: Array.isArray(user.meeting) ? user.meeting : [user.meeting],
				payment_method: Array.isArray(user.payment) ? user.payment : [user.payment],
			};

			const result = await client.create(newUser);

			const token = jwt.sign({ userId: result._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

			await client
				.patch(result._id)
				.set({ token: token })
				.commit();

			try {

				const verificationLink = `${process.env.NEXT_PUBLIC_URL}/consultation/email-verification/${token}`;

				const elementHtml = ReactDOMServer.renderToString(
					<EmailVerificationTemplate verificationLink={verificationLink} />
				);

				await transporter.sendMail({
					from: process.env.EMAIL_USER,
					to: user.email,
					subject: `BEDAYA EMAIL VERIFICATION REQUIRED`,
					html: elementHtml,
				});

				return NextResponse.json({ message: 'Email sent succesfully' });

			} catch (error) {
				return NextResponse.json({ error: 'Failed to send email', message: error.message }, { status: 500 });
			}
		}



	} catch (error) {
		return NextResponse.json({ error: 'Failed to create user or send email', message: error.message }, { status: 500 });
	}
}
