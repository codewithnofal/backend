import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app = express();
const prot = 8000;
app.use(express.json());

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

app.post("/create", async (req, res) => {
  try {
    const { name, age, email, username } = req.body;
    const newUser = await User.create({
      name,
      age,
      email,
      username,
    });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get("/read", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "user not found" });
  }
});

app.get("/read/:username", async (req, res) => {
  try {
    const users = await User.findOne({username: req.params.username});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "user not found" });
  }
});

app.listen(prot, () => {
  connectDb();
  console.log(`server is started at ${prot}`);
});
