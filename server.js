const io = require('socket.io')();
let i = 0;

io.on('connection', (client) => {
  console.log("I'm connected!");
  client.on('test', () => {
    setInterval(() => {
      client.emit('test', `${++i} new message from the server`);
    }, 1000);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);