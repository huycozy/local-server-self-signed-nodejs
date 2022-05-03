const http = require("http");
const host = 'localhost';
const port = 8000;

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = https.createServer(options, requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on https://${host}:${port}`);
});