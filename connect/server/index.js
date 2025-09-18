import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

let password = "nofal123";
app.use(express.json());

app.use((req, res, next) => {
  if (req.body.pass != password) {
    res.send("password does not match");
  }
  next();
});

app.get("/", (req, res) => {
  res.json({ name: "Nofal", age: 21 });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ status: true });
});

app.listen(port, () => {
  console.log("server is started");
});
