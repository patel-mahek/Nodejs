const http = require('http');

//req = incoming request form the cline using the web browser (gian object with lost of porperties)

//res - resoposnse is what we will be sending back
const server=http.createServer((req,res)=>{
    console.log(req)
    
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
})

server.listen(5000)

