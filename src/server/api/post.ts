import { Picture } from "~/server/models/upload";
import nodemailer from "nodemailer";
import { defineEventHandler, readMultipartFormData } from "h3";
import { Storage } from "@google-cloud/storage";

const storage = new Storage({
    autoRetry: false,
});

interface FormDataItem {
    name: string;
    filename?: string;
    type?: string;
    data: Buffer;
}

export default defineEventHandler(async (event) => {
    try {
        const body: FormDataItem[] = await readMultipartFormData(event);

        const name = body.find((item) => item.name === "name");
        const email = body.find((item) => item.name === "email");
        const about = body.find((item) => item.name === "about");
        const picture = body.find((item) => item.name === "picture");

        if (!name || !email || !about || !picture) {
            throw new Error("Missing form fields");
        }

        // Upload image to Google Cloud Storage
        const bucketName = "cfpwings";
        const bucket = storage.bucket(bucketName);
        const file = bucket.file(picture.filename);
        await file.save(picture.data);

        // Get publicly accessible URL of the uploaded image
        const imageUrl = `https://storage.googleapis.com/${bucketName}/${picture.filename}`;

        // Create a transporter using SMTP transport
        const emailContent = `
            Name: ${name.data.toString()}
            Email: ${email.data.toString()}
            About: ${about.data.toString()}
            Image: ${imageUrl}
        `;

        // Create a transporter using SMTP transport
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "ifarooq.dev@gmail.com",
                pass: "wiuk fhvd xyli fawz",
            },
        });

        // Setup email data
        const mailOptions = {
            from: "ifarooq.dev@gmail.com",
            to: "farooqwebd@gmail.com",
            subject: "New Picture Received",
            text: emailContent,
            html: `<p>${emailContent}</p><img src="${imageUrl}" alt="Image">`, // Include image in the email body
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Save picture to the database
        const newPicture = new Picture({
            name: name.data.toString(),
            email: email.data.toString(),
            about: about.data.toString(),
            display: false,
            category: "",
            picture: imageUrl,
        });
        await newPicture.save();

        return { message: "User data saved successfully and email sent." };
    } catch (error) {
        console.error("Error saving user data:", error);
        // Handle error appropriately
        return { error: "An error occurred while saving user data and sending email." };
    }
});

// import { Picture } from "~/server/models/upload";
// import nodemailer from "nodemailer";
// import { defineEventHandler, readMultipartFormData } from "h3";

// interface FormDataItem {
//     name: string;
//     filename?: string;
//     type?: string;
//     data: Buffer;
// }

// export default defineEventHandler(async (event) => {
//     try {
//         const body: FormDataItem[] = await readMultipartFormData(event);

//         const name = body.find((item) => item.name === "name");
//         const email = body.find((item) => item.name === "email");
//         const about = body.find((item) => item.name === "about");
//         const picture = body.find((item) => item.name === "picture");

//         if (!name || !email || !about || !picture) {
//             throw new Error("Missing form fields");
//         }
//         const newPicture = new Picture({
//             name: name.data.toString(),
//             email: email.data.toString(),
//             about: about.data.toString(),
//             display: false,
//             category: "",
//             picture: "",
//         });
//         // Create a transporter using SMTP transport
//         const emailContent = `
//             Name: ${name.data.toString()}
//             Email: ${email.data.toString()}
//             About: ${about.data.toString()}
//         `;

//         // Create a transporter using SMTP transport
//         let transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: "ifarooq.dev@gmail.com",
//                 pass: "wiuk fhvd xyli fawz",
//             },
//         });

//         // Setup email data
//         let mailOptions = {
//             from: "ifarooq.dev@gmail.com",
//             to: "farooqwebd@gmail.com",
//             subject: "New Picture Received",
//             text: emailContent,
//             attachments: [
//                 {
//                     filename: picture.filename,
//                     content: picture.data.toString("base64"),
//                     encoding: "base64",
//                 },
//             ],
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);
//         //save to DB
//         // await newPicture.save();

//         return { message: "User data saved successfully and email sent." };
//     } catch (error) {
//         console.error("Error saving user data:", error);
//         // Handle error appropriately
//         return { error: "An error occurred while saving user data and sending email." };
//     }
// });
