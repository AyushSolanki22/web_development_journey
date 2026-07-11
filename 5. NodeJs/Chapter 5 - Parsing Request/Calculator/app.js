const http=require('http')
const handleRequest=require('./handler')

const server = http.createServer(handleRequest)


const PORT=3000;
server.listen(PORT, ()=>{
  console.log(`server running at http://localhost:${PORT}`)
})