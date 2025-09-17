import express from 'express'

const app = express()
const port = 8000;

app.use(express.json())

// app.get("/", (req,res) => {
//     res.json({name: "Nofal", age: "22"})
// })
// app.post("/", (req,res) => {
//     const body = req.body
//     console.log(body)
//     res.send("hello post")
// })
// app.get("/contact", (req,res) => {
//     res.send("contact page")
// })

app.listen(port, () => {
    console.log("server is started")
})






































































































// import http from "http";

// const port = 8000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("this is home route");
//   } else if (req.url === "/about") {
//     res.end("this is about route");
//   } else if (req.url === "/contact") {
//     res.end("this is contact route");
//   } else {
//     res.end("404 not found");
//   }
// });

// server.listen(8000, () => {
//   console.log("server is started");
// });
