import { Schema, model } from "mongoose";

const pictureSchema = new Schema({
    name: String,
    email: String,
    about: String,
    picture: String,
    display: Boolean,
    category: String,
});

export const Picture = model("Picture", pictureSchema);