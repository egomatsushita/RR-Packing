# RR - Packing

Packing App is a collaboration packing tool which allows users to add an item to a box or remove it without having to register accounts. It will use React, React-dnd, Websockets, Babel, and MongoDB.

## Main Features

- Users can see what items are already in the boxes.
- Users can see all the users that are online on the page.
- Users can join the collaboration page without any authentication.
- Using a persistence data storage (MongoDB).

## Screenshots

### One Online User
![Online-Users](*)

### Two Online Users
![Two-Online-Users](*)

### Change Username
![Change-Username](*)

### Add Item
![Add-Item](*)

### Add Box
![Add-Box](*)

## Known Bugs

- Users are able to drag an item, but they cannot drop it.

## Possible Improvements

- Remove item from a box making it available for drag
- Add more items and boxes.
- Assign your own username.

## Install

## Database setup (Mongo) on a Mac
1. Download and install MongoDB: `brew install mongodb`
    - create a directory to store your local DB `sudo mkdir -p /data/db`
    - run mongod (The process that hosts your local db) `sudo mongod` (Note: This process needs to run the entire time in the background while you are developing)
2. Run the app at least once `mongod`

## Run
1. Install all dependencies: `npm install`
2. In separate terminals:
3. 1st Terminal - Run `mongod`
4. 2st Terminal - Run the development web server: `node server`
5. 3st Terminal - Run the client web server: `npm start`
6. View at `http://localhost:3000/`