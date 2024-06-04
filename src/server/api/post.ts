import { Picture } from "~/server/models/upload";
import nodemailer from "nodemailer";
import { defineEventHandler, readMultipartFormData } from "h3";
import AWS from "aws-sdk";

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "eu-north-1",
});

const s3 = new AWS.S3();

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

        const pictureFilename = `${Date.now()}_${picture.filename}`;
        const s3Params = {
            Bucket: "wings-cfp",
            Key: pictureFilename,
            Body: picture.data,
            ContentType: picture.type,
        };

        // Upload to S3
        await s3.upload(s3Params).promise();

        // record with the S3 file location
        const newPicture = new Picture({
            name: name.data.toString(),
            email: email.data.toString(),
            about: about.data.toString(),
            display: false,
            category: "",
            picture: `https://${s3Params.Bucket}.s3.amazonaws.com/${pictureFilename}`, // Store S3 URL
        });

        // Save to database
        await newPicture.save();

        const emailContent = `
      Name: ${name.data.toString()}
      Email: ${email.data.toString()}
      About: ${about.data.toString()}
    `;

        //  SMTP transportor
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
            attachments: [
                {
                    filename: picture.filename,
                    content: picture.data.toString("base64"),
                    encoding: "base64",
                },
            ],
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.error("Picture uploaded successfully");
        return { message: "User data saved successfully, image uploaded to S3, and email sent." };
    } catch (error) {
        console.error("Error processing request:", error);
        return { error: "An error occurred while processing the request." };
    }
});

// import { Picture } from "~/server/models/upload";
// import nodemailer from "nodemailer";
// import { defineEventHandler, readMultipartFormData } from "h3";
// import { Storage } from "@google-cloud/storage";

// const storage = new Storage({
//     autoRetry: false,
// });

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

//         // Upload image to Google Cloud Storage
//         const bucketName = "cfpwings";
//         const bucket = storage.bucket(bucketName);
//         const file = bucket.file(picture.filename);
//         await file.save(picture.data);

//         // Get publicly accessible URL of the uploaded image
//         const imageUrl = `https://storage.googleapis.com/${bucketName}/${picture.filename}`;

//         // Create a transporter using SMTP transport
//         const emailContent = `
//             Name: ${name.data.toString()}
//             Email: ${email.data.toString()}
//             About: ${about.data.toString()}
//             Image: ${imageUrl}
//         `;

//         // Create a transporter using SMTP transport
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: "ifarooq.dev@gmail.com",
//                 pass: "wiuk fhvd xyli fawz",
//             },
//         });

//         // Setup email data
//         const mailOptions = {
//             from: "ifarooq.dev@gmail.com",
//             to: "farooqwebd@gmail.com",
//             subject: "New Picture Received",
//             text: emailContent,
//             html: `<p>${emailContent}</p><img src="${imageUrl}" alt="Image">`, // Include image in the email body
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);

//         // Save picture to the database
//         const newPicture = new Picture({
//             name: name.data.toString(),
//             email: email.data.toString(),
//             about: about.data.toString(),
//             display: false,
//             category: "",
//             picture: imageUrl,
//         });
//         await newPicture.save();

//         return { message: "User data saved successfully and email sent." };
//     } catch (error) {
//         console.error("Error saving user data:", error);
//         // Handle error appropriately
//         return { error: "An error occurred while saving user data and sending email." };
//     }
// });
