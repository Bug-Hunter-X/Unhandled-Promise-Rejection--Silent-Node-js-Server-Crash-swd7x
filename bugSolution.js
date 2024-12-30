const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
}).on('error', err => {
  console.error('Server error:', err);
});

//This improved version utilizes async/await and includes comprehensive error handling using try...catch for asynchronous operations.  
//Additional error handling is added for the server's listen method itself, logging any errors that may occur during startup.