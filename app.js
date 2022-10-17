const fs = require('fs'); // one of Node.JS's modules for file system functionality
const http = require('http');

console.log('Hello from Node.JS')
fs.writeFileSync('hello.txt', 'Hello from Node.JS'); // first part is filepath+filename, second is content

