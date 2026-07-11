const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Navigation bar of Myntra</title></head>");
  if (req.url === "/") {
    res.write("<body>");
    res.write("<h1>Myntra Page</h1><hr>");
    res.write('<a href="/home">Home</a><br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if(req.url==='/home'){
    res.write('<h1>Welcome to Home</h1>')
    return res.end()
  }
  else if(req.url==='/men'){
    res.write('<h1>Welcome to Men</h1>')
    return res.end()
  }
  else if(req.url==='/women'){
    res.write('<h1>Welcome to Women</h1>')
    return res.end()
  }
  else if(req.url==='/kids'){
    res.write('<h1>Welcome to Kids</h1>')
    return res.end()
  }
  res.write('<h1>Welcome to Cart</h1>')
  res.write("</html>");
  return res.end()
});


server.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
