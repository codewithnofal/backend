import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

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
