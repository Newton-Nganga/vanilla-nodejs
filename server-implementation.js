const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  // Send response
  res.end('Hello, World!');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
