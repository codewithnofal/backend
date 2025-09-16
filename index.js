import http from "http";

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home route");
  } else if (req.url === "/about") {
    res.end("this is about route");
  } else if (req.url === "/contact") {
    res.end("this is contact route");
  } else {
    res.end("404 not found");
  }
});

server.listen(8000, () => {
  console.log("server is started");
});
