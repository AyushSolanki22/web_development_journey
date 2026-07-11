const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // Home Page
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details:</h1>");

    res.write('<form action="/submit-details" method="POST">');

    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br><br>',
    );

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');

    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" /><br><br>',
    );

    res.write('<button type="submit">Submit</button>');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  // Form Submission
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {

      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) bodyObject[key] = value;
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);


      //file adding part

      // const bodyString = JSON.stringify(bodyObject);
      // console.log(bodyString);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  // Default Response
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
