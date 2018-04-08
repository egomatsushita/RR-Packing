// const OBJECTID = require("mongodb").ObjectID;

const makeDataHelpers = (db) => {
  return {
    getUsers: (callback) => {
      db.collection("users")
        .find()
        .toArray((err, users) => {
          if (err) {
            return callback(err);
          }
          callback(null, users);
        });
    },
    getBoxes: (callback) => {
      db.collection("boxes")
        .find()
        .toArray((err, boxes) => {
          if (err) {
            return callback(err);
          }
          callback(null, boxes);
        });
    },
    getItems: (callback) => {
      db.collection("items")
        .find()
        .toArray((err, items) => {
          if (err) {
            return callback(err);
          }
          callback(null, items);
        });
    }
  }
}

module.exports = makeDataHelpers;