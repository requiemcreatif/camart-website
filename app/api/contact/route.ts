// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, lastname, email, message, newsletter } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: "Nuevo mensaje desde el formulario de contacto de Camart",
    text: `
      Name: ${name} ${lastname}
      Email: ${email}
      Message: ${message}
      Newsletter: ${newsletter ? "Yes" : "No"}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Nombre:</strong> ${name} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
