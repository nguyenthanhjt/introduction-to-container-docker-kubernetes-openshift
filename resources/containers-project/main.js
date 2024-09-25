const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0'; // Bind to all network interfaces
const port = 3000;
const indexPath = path.join(__dirname, 'public', 'index.html');

const server = http.createServer((req, res) => {
  // Read the contents of index.html
  fs.readFile(indexPath, (err, data) => {
    if (err) {
      // If an error occurs while reading the file, respond with an error status code
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      console.error('Error reading index.html:', err);
    } else {
      // If the file is read successfully, respond with its contents
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
