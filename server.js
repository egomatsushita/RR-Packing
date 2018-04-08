const io = require('socket.io')();
const { MongoClient } = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/rose-rocket";
const makeDataHelpers = require("./server/dataHelper");
const PORT = 8000;
let totalConnections = 0;
let allUsers;
let users = [];
// const manyBoxes = require("./server/mockBoxes.json");

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  makeDataHelpers(db).getUsers((err, users) => {
    if (err) throw err;
    allUsers = users;
  })

  io.on('connection', (client) => {
    console.log("I'm connected!");
    totalConnections++;

    const currentUser = allUsers[(totalConnections - 1) % allUsers.length];
    users = users.concat(currentUser);

    client.on('updateBoxesState', () => {
      makeDataHelpers(db).getBoxes((err, boxes) => {
        if (err) throw err;
        console.log("loading boxes");
        client.emit('boxesResult', boxes);
      })
    });
    
    client.on('updateItemsState', () => {
      makeDataHelpers(db).getItems((err, items) => {
        if (err) throw err;
        console.log("loading items");
        client.emit('itemsResult', items);
      })
    });

    client.on('updateUsersState', () => {
      client.emit('usersResult', users);
      client.broadcast.emit('usersResult', users);
    });

  });  
});

io.listen(PORT);
console.log('listening on PORT ', PORT);
