# RR - Packing

Packing App is a collaboration packing tool which allows users to add an item to a box or remove it without having to register accounts. It will use React, React-DnD, Socket.IO, Babel, and MongoDB.

## Main Features

- Users can see what items are already in the boxes.
- Users can see what items are available for packing.
- Users can see all the users that are online on the page.
- Users can drag an item from the list of available items to any box that hasn't exceed its weight limit.
- Users can see which items are already in a box and are not available to drag signed by gray color.
- Users can see which boxes are available to drop signed by khaki color, and once the drag item is over the available box the box color change to green.
- Users can remove item from a box making it available for drag.
- Users can join the collaboration page without any authentication.
- Users can add more items.
- Users can add more boxes.
- User can assign your own username.
- Using a persistence data storage (MongoDB).

## Screenshots

### Home
![Home](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-home.png?raw=true)

### Edit Username | Add Item | Add Box
![Edit-Username-Add-Item-Add-Box](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-user-item-box.gif?raw=true)

### Drag and Drop Items
![Drag-and-Drop-Items](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-add-items.gif?raw=true)

### Remove Items
![Remove-Items](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-remove-items.gif?raw=true)

### Two Online Users - Edit Username | Add Item | Add Box
![Two-Online-Users-Edit-Username-Add-Item-Add-Box](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-2u-user-item-box.gif?raw=true)

### Two Online Users - Drag and Drop Items | Remove Items
![Two-Online-Users-Drag-and-Drop-Items-Remove-Items](https://github.com/egomatsushita/RR-Packing/blob/master/docs/rr-new-2u-add-remove-items.gif?raw=true)


## Possible Improvements

- Implement CSS preprocessor (Sass)

## Install

## Database setup (Mongo) on a Mac
1. Download and install MongoDB: `brew install mongodb`
    - create a directory to store your local DB `sudo mkdir -p /data/db`
    - run mongod (The process that hosts your local db) `sudo mongod` (Note: This process needs to run the entire time in the background while you are developing)

## Run
1. Install all dependencies: `npm install`
2. In separate terminals:
3. 1st Terminal - Run `mongod`
4. 2st Terminal - Run the development web server: `node server`
5. 3st Terminal - Run the client web server: `npm start`
6. View at `http://localhost:3000/`