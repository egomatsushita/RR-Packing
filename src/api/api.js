import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function test(cb) {
  socket.on('test', test => cb(null, test))
  socket.emit('test', "message from the client");
}

export { test }