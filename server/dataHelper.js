const OBJECTID = require("mongodb").ObjectID;

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
    },
    addBox: (newBox) => {
      db.collection("boxes")
        .insert(
          {
            name: newBox.name,
            total_allowed_weight: newBox.total_allowed_weight
          }
        );
    },
    addItem: (newItem) => {
      db.collection("items")
        .insert(
          {
            name: newItem.name,
            weight: newItem.weight,
            box_id: null
          }
        );
    },
    updateItemData: (itemId, boxId) => {
      db.collection("items")
        .update(
          { _id: OBJECTID(itemId) },
          { $set: { box_id: boxId } }
        );
    }
  }
}

module.exports = makeDataHelpers;