import fs from 'fs'

console.log('Hello from Node.JS')
fs.writeFileSync('hello.txt', 'Hello from Node.JS'); // first part is filepath+filename, second is content