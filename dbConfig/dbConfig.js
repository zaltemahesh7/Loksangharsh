import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to Mongodb.. :)");
    });
    connection.on("error", (error) => {
      console.error("Error Connecting to Mongodb.. :( ", error);
      process.exit();
    });
  } catch (error) {
    console.error("Something wents wrong while connecting to mongodb..");
    console.log(error);
  }
}
