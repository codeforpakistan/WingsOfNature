import mongoose from "mongoose";

export default async () => {
    try {
        const connect =
            "mongodb://farooqwebd:ok0IC8DGrVJlgzhk@ac-g23mj8w-shard-00-00.voann0b.mongodb.net:27017,ac-g23mj8w-shard-00-01.voann0b.mongodb.net:27017,ac-g23mj8w-shard-00-02.voann0b.mongodb.net:27017/Wings?ssl=true&replicaSet=atlas-udtrlz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
        mongoose.connect(connect, {});
        var db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error:"));
        db.once("open", function () {
            console.log("connected");
        });
    } catch (error) {
        console.log(error);
    }
};
