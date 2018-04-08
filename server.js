const PORT = 8000;
const io = require('socket.io')();
const { MongoClient } = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/rose-rocket";
let totalConnections = 0;
// const { makeDataHelper } = require("./server/dataHelper");
// const manyBoxes = require("./server/mockBoxes.json");

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  
  const getBoxes = (callback) => {
    db.collection("boxes")
      .find()
      .toArray((err, boxes) => {
        if (err) {
          return callback(err);
        }
        callback(null, boxes);
      });
  }
  const getItems = (callback) => {
    db.collection("items")
      .find()
      .toArray((err, items) => {
        if(err) {
          return callback(err);
        }
        callback(null, items);
      });
  }
  const getUsers = (callback) => {
    db.collection("users")
      .find()
      .toArray((err, users) => {
        if(err) {
          return callback(err);
        }
        callback(null, users);
      });
  }

  let allUsers;
  getUsers((err, users) => {
    if (err) throw err;
    allUsers = users;
  })


  let users = [];
  const connectUser = () => {

  }

  io.on('connection', (client) => {
    console.log("I'm connected!");
    totalConnections++;

    const currentUser = allUsers[(totalConnections - 1) % allUsers.length];
    users = users.concat(currentUser);

    client.on('updateBoxesState', () => {
      getBoxes((err, boxes) => {
        if (err) throw err;
        console.log("loading boxes");
        client.emit('boxesResult', boxes);
      })
    });
    
    client.on('updateItemsState', () => {
      getItems((err, items) => {
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
