
const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res) => {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.readFile('page2.html',(err,data) => {
        res.end(data);
    });
});


server.listen(8080,() => {
    console.log('server is online and working succesfully!');
})