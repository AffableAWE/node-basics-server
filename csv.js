const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=ajtracy.csv");
    res.writeHead(200);
    res.end(`id, name, email\n1, Priyansh Shukla, priyansh@ajtracy.com `);
}

const server = http.createServer(requestListener);
server.listen(port, host, ()=> {
console.log(`This server is running on http://${host}:${port}`);
});
