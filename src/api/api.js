import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function updateBoxesState(cb) {
  socket.on('result', boxes => cb(null, boxes))
  socket.emit('updateBoxesState');
}

export { updateBoxesState }