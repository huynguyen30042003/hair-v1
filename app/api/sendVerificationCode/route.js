import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("Received email:", email); // Log received email for debugging

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated verification code:", verificationCode); // Log verification code for debugging

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Mã Xác Nhận",
      text: `Mã xác nhận của bạn là: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully"); // Log success message

    return NextResponse.json({ message: "Email đã được gửi thành công" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Đã xảy ra lỗi khi gửi email" },
      { status: 500 }
    );
  }
}
