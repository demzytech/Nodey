const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end('Hello Node!!!\n')
}).listen(3000, () => console.log('server running on port 3000'));