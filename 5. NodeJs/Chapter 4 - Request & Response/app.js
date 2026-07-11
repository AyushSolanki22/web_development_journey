const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like /Share/ Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
