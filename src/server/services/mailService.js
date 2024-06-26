import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendMail = (formData) => {
    const emailContent = `
    Name: ${formData.name.data.toString()}
    Email: ${formData.email.data.toString()}
    About: ${formData.about.data.toString()}
  `;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_RECIEVER,
        subject: "New Picture Received",
        text: emailContent,
        attachments: [
            {
                filename: formData.picture.filename,
                content: formData.picture.data.toString("base64"),
                encoding: "base64",
            },
        ],
    };

    return transporter.sendMail(mailOptions);
};
