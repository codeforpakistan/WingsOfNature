import sgMail from "@sendgrid/mail";

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
                content: formData.picture.data.toString("base64"),
                filename: formData.picture.filename,
                type: formData.picture.mimetype,
                disposition: "attachment",
                content_id: "picture",
            },
        ],
    };

    return sgMail.send(mailOptions);
};
