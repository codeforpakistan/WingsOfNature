import mongoose from "mongoose";

export default async () => {
    try {
        const connect =
            "mongodb://farooq:vQpxux43SneaTsoq@ac-vhh5bhq-shard-00-00.ojg3aqh.mongodb.net:27017,ac-vhh5bhq-shard-00-01.ojg3aqh.mongodb.net:27017,ac-vhh5bhq-shard-00-02.ojg3aqh.mongodb.net:27017/Wings?replicaSet=atlas-x7znwy-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
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
