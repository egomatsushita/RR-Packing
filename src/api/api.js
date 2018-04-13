import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const updateBoxesState = (cb) => {
  socket.on('boxesResult', boxes => cb(null, boxes));
  socket.emit('updateBoxesState');
}

const updateItemsState = (cb) => {
  socket.on('itemsResult', items => cb(null, items));
  socket.emit('updateItemsState');
}

const updateUsersState = (cb) => {
  socket.on('usersResult', users => cb(null, users));
  socket.emit('updateUsersState');
}

const updateCurrentUser = (cb) => {
  socket.on('currentUserResult', user => cb(null, user));
  socket.emit('updateCurrentUser');
}

const updateCurUser = (currentUser, newName) => {
  socket.emit('updateCurUser', currentUser, newName);
}

const addNewBox = (newBox) => {
  socket.emit('addNewBox', newBox);
}

const addNewItem = (newItem) => {
  socket.emit('addNewItem', newItem);
}

const updateItemData = (itemId, boxId) => {
  socket.emit('updateItemData', itemId, boxId);
} 

export default { 
  updateBoxesState: updateBoxesState,
  updateItemsState: updateItemsState,
  updateUsersState: updateUsersState,
  updateCurrentUser: updateCurrentUser,
  addNewBox: addNewBox,
  addNewItem: addNewItem,
  updateItemData: updateItemData,
  updateCurUser: updateCurUser
}