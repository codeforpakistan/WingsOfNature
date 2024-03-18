import { Schema, model } from "mongoose";

const pictureSchema = new Schema({
    name: String,
    email: String,
    about: String,
    picture: String,
});

export const Picture = model("Picture", pictureSchema);
