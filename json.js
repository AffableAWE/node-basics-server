const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"messge": "This is a json response"}`);
}

const server = http.createServer(requestListener);
server.listen(port, host, ()=> {
console.log(`This server is running on https://${host}:${port}`);
});
