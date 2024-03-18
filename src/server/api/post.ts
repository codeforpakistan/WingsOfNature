import { Picture } from "~/server/models/upload";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    try {
        // Assuming 'event' object contains the form data directly
        const { name, picture, email, about } = event;
        const newUser = new Picture({ name, email, about, picture });
        await newUser.save();
        return { message: "User data saved successfully" };
    } catch (error) {
        console.error("Error saving user data:", error);
        // Handle error appropriately
        return { error: "An error occurred while saving user data" };
    }
});
