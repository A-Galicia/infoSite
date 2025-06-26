const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('./html/index.html', (err, data) => {
      if (err === null) {
        writeToPage(data, res);
      } else {
        show404(res);
      }
    });
  } else {
    fs.readFile('./html/' + req.url, (err, data) => {
      if (err === null) {
        writeToPage(data, res);
      } else {
        show404(res);
      }
    });
  }
});

server.listen(8080);

// Functions //////////////////////////////////////////////////////
function writeToPage(data, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
}

function show404(res) {
  fs.readFile('./html/404.html', (err, data) => {
    if (err === null) {
      writeToPage(data, res);
    }
  });
}
