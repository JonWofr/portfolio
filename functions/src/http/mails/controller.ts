import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';

export const sendMail = async (req: express.Request, res: express.Response) => {
  try {
    const {
      senderName,
      senderEmail,
      message,
    }: { senderName: string; senderEmail: string; message: string } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: functions.config().nodemailer.user,
        pass: functions.config().nodemailer.password,
      },
    });

    const emailBody = `
    <h1>
      Neue Jobanfrage
    </h1>
    <br>
    <br>
    <p>
      Name: ${senderName}<br>
      Email: ${senderEmail}
    </p>
    <p>
      ${message}
    </p>
    `;

    const info = await transporter.sendMail({
      from: '"Jonas Wolfram" <no-reply@jonas-wolfram.com>',
      to: 'contact@jonas-wolfram.com',
      subject: 'Neue Jobanfrage',
      text: emailBody,
      html: emailBody,
    });

    res.status(200).send(info);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
