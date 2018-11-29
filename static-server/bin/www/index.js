const http = require('http');

const app = require('../../app');

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => console.log('serving static assets from PORT ', PORT));

server.on('error', () => {
  server.close();
  setTimeout(() => server.listen(PORT, () => console.log('static-server rebooted')));
});
