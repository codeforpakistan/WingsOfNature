import { Picture } from "~/server/models/upload";

export default defineEventHandler(async () => {
    try {
        const pictures = await Picture.find();
        return { pictures };
    } catch (error) {
        console.error("Error fetching pictures:", error);
        return { error: "An error occurred while fetching pictures" };
    }
});
