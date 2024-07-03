import { Picture } from "~/server/models/upload";
import { defineEventHandler, readMultipartFormData } from "h3";
import { uploadToS3 } from "~/server/services/awsService";
import { sendMail } from "~/server/services/mailService";
import { extractAndValidateFormData } from "~/server/utils/formUtils";

export default defineEventHandler(async (event) => {
    try {
        const body = await readMultipartFormData(event);

        const requiredFields = ["name", "email", "about", "picture", "phone", "category"];
        const formData = extractAndValidateFormData(body, requiredFields);

        const { uploadPromise, pictureUrl } = uploadToS3(formData);
        await uploadPromise;

        const newPicture = new Picture({
            name: formData.name.data.toString(),
            email: formData.email.data.toString(),
            about: formData.about.data.toString(),
            display: false,
            category: formData.category.data.toString(),
            phone: formData.phone.data.toString(),
            picture: pictureUrl,
        });

        await newPicture.save();
        await sendMail(formData);

        return { message: "User data saved successfully, image uploaded to S3, and email sent." };
    } catch (error) {
        console.error("Error processing request:", error);
        return { error: "An error occurred while processing the request." };
    }
});
