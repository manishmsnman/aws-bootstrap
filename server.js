const { hostname } = require("os");
const http = require("http");

const message = "Hello World\n";
const PORT = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(message);
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
