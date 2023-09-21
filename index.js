
const http = require('http');

const server = http.createServer((req,res) => {
    res.end('hello world welcome toe _ _');
})


server.listen(8080,() => {
    console.log('server is online and working succesfully!');
})