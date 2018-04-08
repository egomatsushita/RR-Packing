const OBJECTID = require("mongodb").ObjectID;

module.exports = function makeDataHelpers(db) {
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

      db.close();
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

      db.close();
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

      db.close();
    }
  }
}