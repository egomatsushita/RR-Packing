import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const updateBoxesState = (cb) => {
  socket.on('boxesResult', boxes => cb(null, boxes))
  socket.emit('updateBoxesState');
}

const updateItemsState = (cb) => {
  socket.on('itemsResult', items => cb(null, items))
  socket.emit('updateItemsState');
}

const updateUsersState = (cb) => {
  socket.on('usersResult', users => cb(null, users))
  socket.emit('updateUsersState');
}

const updateCurrentUser = (cb) => {
  socket.on('currentUserResult', user => cb(null, user))
  socket.emit('updateCurrentUser');
}

export default { 
  updateBoxesState: updateBoxesState,
  updateItemsState: updateItemsState,
  updateUsersState: updateUsersState,
  updateCurrentUser: updateCurrentUser
}