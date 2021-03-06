import React, { Component } from 'react';
import '../styles/App.css';
import API from '../api/api';
import { Page } from '../components/Page';
import { ItemList } from '../components/ItemList';
import { BoxList } from '../components/BoxList';
import { UserList } from '../components/UserList';
import Dashboard from '../components/Dashboard';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      items: [],
      users: [],
      currentUser: {},
      droppedItemId: [],
    }
    
    API.updateBoxesState((err, boxes) => {
      this.setState({boxes: boxes});
    });

    API.updateItemsState((err, items) => {
      let itemsIdInBox = items.filter(item => item.box_id).map(item => item._id);
      this.setState({droppedItemId: itemsIdInBox});
      this.setState({items: items});
    });

    API.updateUsersState((err, users) => {
      this.setState({users: users});
    });

    API.updateCurrentUser((err, user) => {
      this.setState({currentUser: user});
    });

    this.isDropped = this.isDropped.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.changeName = this.changeName.bind(this);
    this.addBox = this.addBox.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  isDropped(itemId) {
    return this.state.droppedItemId.indexOf(itemId) > -1;
  }

  handleDrop(itemId, boxId) {
    API.updateItemData(itemId, boxId);
    API.updateItemsState((err, items) => {
      let itemsIdInBox = items.filter(item => item.box_id).map(item => item._id);
      this.setState({ droppedItemId: itemsIdInBox });
      this.setState({ items: items });
    });
  }

  handleRemove(itemId) {
    const boxId = null;

    API.updateItemData(itemId, boxId);
    API.updateItemsState((err, items) => {
      let itemsIdInBox = items.filter(item => item.box_id).map(item => item._id);
      this.setState({ droppedItemId: itemsIdInBox });
      this.setState({ items: items });
    });
  }
  
  changeName(username) {
    let updatedUser = this.state.currentUser;
    updatedUser.name = username;
    this.setState({currentUser: updatedUser});
    API.updateCurUser(this.state.currentUser, username);
    API.updateUsersState((err, users) => {
      this.setState({ users: users });
    });
  }

  addBox(newBox) {
    API.addNewBox(newBox);
    API.updateBoxesState((err, boxes) => {
      this.setState({ boxes: boxes });
    });
  }

  addItem(newItem) {
    API.addNewItem(newItem);
    API.updateItemsState((err, items) => {
      this.setState({ items: items });
    });
  }

  render() {
    const { boxes, items, users, currentUser } = this.state;

    return (
      <div className="app-container">       
        <Page>         
          <Dashboard 
            currentUser={currentUser} 
            changeName={this.changeName} 
            addBox={this.addBox} 
            addItem={this.addItem}
          />
          <UserList users={users}/>
          <ItemList items={items} isDropped={this.isDropped}/>
          <BoxList 
            boxes={boxes} 
            items={items} 
            onDrop={this.handleDrop} 
            onRemove={this.handleRemove}
          />
        </Page>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
