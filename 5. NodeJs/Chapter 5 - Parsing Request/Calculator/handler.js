const handleRequest = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-type", "text.html");
  res.write("<html>");
  res.write("<head><title>Calculator</title></head>");
  if (req.url === "/calculator") {
    res.write("<body>");
    res.write("<h1>Calculator</h1>");
    res.write('<form action="/calculate-result" method="POST">');
    res.write(
      '<input type="number" name="a" placeholder="Enter number 1: "><br>',
    );
    res.write(
      '<br><input type="number" name="b" placeholder="Enter number 2: ">',
    );
    res.write("<br><br><button type='submit'>Sum</button>");
    res.write("</form");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params=new URLSearchParams(fullBody)
      const bodyObject=Object.fromEntries(params)
      console.log(bodyObject)
    });
  }

  res.write("<body>");
  res.write("<p>Welcome</p>");
  res.write('<br></br> <a href="/calculator">Go to Calculator</a>');
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = handleRequest;
