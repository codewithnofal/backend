import express from "express";
import mongoose from "mongoose";

const app = express();
const prot = 8000;
const mongoURI =
  "mongodb+srv://nofilkachhot_db_user:nofal123@cluster0.iusamoh.mongodb.net/TechVerce";

const connectDb = async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("hello mongodb");
});

app.listen(prot, () => {
  connectDb();
  console.log(`server is started at ${prot}`);
});
