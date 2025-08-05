import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { client } from '@/app/lib/sanityClient';


const jwt = require('jsonwebtoken');

export async function POST(request) {
	const { user } = await request.json();

	if (!user.name || !user.email || !user.phone || !user.country || !user.study_level || !user.study_field || !user.grade || !user.date || !user.time || !user.meeting || !user.payment) {
		return NextResponse.json({ message: 'Please fill all the fields' }, { status: 400 });

	} else {
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

			if (findEmail.length > 0 && findEmail[0].token === '') {
				return NextResponse.json({ message: 'Email already registered and verified' }, { status: 400 });
			} else {

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
					meetingDate: user.date,
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

					const verificationLink = `${process.env.NEXT_PUBLIC_URL}consultation/email-verification?token=${token}`;

					await transporter.sendMail({
						from: process.env.EMAIL_USER,
						to: user.email,
						subject: `BEDAYA EMAIL VERIFICATION REQUIRED`,
						html: `
							<html lang="en">
								<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f4;">

									<div
										style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);">

										<!-- Header -->
										<div style="background-color: #fff; padding: 20px 20px; text-align: center;border-bottom: 2px solid #410071;">
											<img src="https://bedayac.netlify.app/favicon.svg" alt="StudyAbroad Agency" style="max-width: 120px;">
											<h1 style="color: #410071; font-size: 24px; margin: 0;">Confirm Your Email</h1>
										</div>

										<!-- Body -->
										<div style="padding: 30px 20px; text-align: center; color: #333333;">
											<p style="font-size: 16px; line-height: 1.6;">
												Hello! Thank you for registering with <strong>StudyAbroad Agency</strong>.
											</p>
											<p style="font-size: 16px; line-height: 1.6;">
												To confirm your registration and complete the verification process, please verify your email address by clicking
												the button below:
											</p>

											<a href="${verificationLink}"
												style="display: inline-block; margin: 25px 0; padding: 14px 30px; background-color: #870ae6; color: #ffffff; font-size: 16px; border-radius: 6px; text-decoration: none; font-weight: bold;">
												Verify My Email
											</a>

											<p style="font-size: 14px; color: #666666; line-height: 1.6; margin-top: 30px;">
												If you did not create an account, you can safely ignore this email.
											</p>

											<hr style="margin: 40px 0; border: none; border-top: 1px solid #eeeeee;" />

											<p style="font-size: 14px; color: #999999;">
												Having trouble? Copy and paste this link into your browser:<br>
												<a href="${verificationLink}" style="color: #870ae6;">${verificationLink}</a>
											</p>
										</div>

										<!-- Footer -->
										<div style="background-color: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #999999;">
											<p style="margin: 5px 0;">&copy;
												<script>document.write(new Date().getFullYear());</script>
												StudyAbroad Agency. All rights reserved.</p>
											<p style="margin: 5px 0;">Rabat-Sale , Morocco , 11000</p>
										</div>
									</div>

								</body>

								</html>
							`,
					});

					return NextResponse.json({ message: 'Email sent succesfully' });

				} catch (error) {
					return NextResponse.json({ error: 'Failed to send email', message: error.message }, { status: 500 });
				}
			}



		} catch (error) {
			return NextResponse.json({ message: 'Failed to create user or send email', error: error.message }, { status: 500 });
		}
	}





}
