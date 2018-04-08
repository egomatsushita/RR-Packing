import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const updateBoxesState = (cb) => {
  console.log("UPDATE BOXES STATE");
  socket.on('boxesResult', boxes => cb(null, boxes))
  socket.emit('updateBoxesState');
}

const updateItemsState = (cb) => {
  console.log("UPDATE ITEMS STATE");
  socket.on('itemsResult', items => cb(null, items))
  socket.emit('updateItemsState');
}

export default { 
  updateBoxesState: updateBoxesState,
  updateItemsState: updateItemsState
}