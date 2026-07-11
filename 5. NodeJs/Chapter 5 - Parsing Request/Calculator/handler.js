const handleRequest=(req,res)=>{
  res.setHeader("Content-type","text.html")
  res.write('<html>')
  res.write('<head><title>Calculator</title></head>')
  if(req.url==='/calculator') {
    res.write('<body>');
    res.write('<h1>Calculator</h1>')
    res.write('<form action="/calculate-result">')
    res.write('<input type="text" name="a">')
    res.write('<br><input type="text" name="b" >')
    res.write('</form')
    res.write('</body>');
    res.write('</html>');
    return res.end()
    res.end()  
  }
  else if(req.url==='/calculate-result'){

  }

  res.write('<body>');
  res.write('<p>Welcome</p>')
  res.write('<br></br> <a href="/calculator">Go to Calculator</a>')
  res.write('</body>');
  res.write('</html>')
  res.end()
}







module.exports=handleRequest