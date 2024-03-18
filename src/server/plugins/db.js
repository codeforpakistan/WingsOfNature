import mongoose from "mongoose";

export default async () => {
    const dbConnection = "mongodb+srv://farooqwebd:ok0IC8DGrVJlgzhk@cluster0.voann0b.mongodb.net/";
    mongoose.connect(dbConnection, {});
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log("connected");
    });
};
