// const fs = require('fs'); // one of Node.JS's modules for file system functionality
const http = require('http');

// console.log('Hello from Node.JS')
// fs.writeFileSync('hello.txt', 'Hello from Node.JS'); // first part is filepath+filename, second is content

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end(); //we need to write return so that the rest of the commands dont execute after res.end()
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end(); //we need to end the response; any text after this will end up in an error
});

server.listen(3000);
