import express from 'express'

const app = express()
const port = 8000;

const users = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "amit.sharma@example.com",
    "phone": "+91-9876543210",
    "city": "Ahmedabad",
    "role": "Admin"
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "email": "priya.patel@example.com",
    "phone": "+91-9123456780",
    "city": "Surat",
    "role": "Editor"
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "email": "rahul.verma@example.com",
    "phone": "+91-9988776655",
    "city": "Mumbai",
    "role": "Customer"
  },
  {
    "id": 4,
    "name": "Sneha Iyer",
    "email": "sneha.iyer@example.com",
    "phone": "+91-9090909090",
    "city": "Bangalore",
    "role": "Customer"
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "email": "karan.mehta@example.com",
    "phone": "+91-9871234567",
    "city": "Delhi",
    "role": "Moderator"
  }
]


app.use(express.json())


app.get("/user", (req,res) => {
        res.json(users)
})
app.get("/user/:id", (req,res) => {
        let id = req.params.id;

        let excistingId = users.find((user) => (user.id == id));

        res.json(excistingId)
})

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
