const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Error:  Unexpected server shutdown due to unhandled promise rejection

//The server might seem to work correctly at first glance, but a hidden promise rejection could cause it to crash without clear error messages.
//Example: Asynchronous database operation, file system access, or external API calls without proper error handling.