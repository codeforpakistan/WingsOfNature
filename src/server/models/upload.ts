import { Schema, model } from "mongoose";

const pictureSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        about: { type: String, required: false },
        picture: { type: String, required: true },
        display: { type: Boolean, required: true },
        category: { type: String, required: true },
        phone: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const Picture = model("Picture", pictureSchema);
