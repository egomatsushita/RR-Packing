const PORT = 8000;
const io = require('socket.io')();
const { MongoClient } = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/rose-rocket";
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

  io.on('connection', (client) => {
    console.log("I'm connected!");
    client.on('updateBoxesState', () => {
      getBoxes((err, boxes) => {
        if (err) throw err;
        console.log("loading boxes");
        client.emit('result', boxes);
      })
    });
  });

  
});

  // function getUsers(cb) {
  //   db.collection("users")
  //     .find()
  //     .toArray((err, users) => {
  //       if(err) {
  //         return cb(err);
  //       }
  //       cb(null, users);
  //     });

  //   db.close();
  // }

io.listen(PORT);
console.log('listening on PORT ', PORT);
