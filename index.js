// With Express
const path = require('node:path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html', '/index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/html', '/about.html'));
});
app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/html', '/contact-me.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// just with Node.js

/* const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  writeToPage(req, res);
  if (req.url == '/') {
    fs.readFile('./html/index.html', (err, data) => {
      if (err === null) {
        writeToPage(data, res);
      } else {
        show404(res);
      }
    });
  } else {
    fs.readFile(path.join(__dirname, '/html', req.url), (err, data) => {
      if (err === null) {
        writeToPage(data, res);
      } else {
        show404(res);
      }
    });
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT);

// Functions //////////////////////////////////////////////////////
function writeToPage(data, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
}

function show404(res) {
  fs.readFile(path.join(__dirname, '/html', '/404.html'), (err, data) => {
    if (err === null) {
      writeToPage(data, res);
    }
  });
}
 */
