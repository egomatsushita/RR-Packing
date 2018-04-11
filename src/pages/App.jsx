import React, { Component } from 'react';
import '../styles/App.css';
import API from '../api/api';
import { Page } from '../components/Page';
import { ItemList } from '../components/ItemList';
import { BoxList } from '../components/BoxList';
import { UserList } from '../components/UserList';
import { Dashboard } from '../components/Dashboard';
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
      showTextbox: false    
    }
    
    API.updateBoxesState((err, boxes) => {
      let newBoxes = this.state.boxes;
      newBoxes = this.state.boxes.concat(boxes);
      this.setState({boxes: newBoxes});
    });

    API.updateItemsState((err, items) => {
      let newItems = this.state.items;
      newItems = this.state.items.concat(items);
      this.setState({items: newItems});
    });

    API.updateUsersState((err, users) => {
      let newUsers = this.state.users;
      newUsers = users;
      this.setState({users: newUsers});
    });

    API.updateCurrentUser((err, user) => {
      let currentUser = this.state.currentUser;
      currentUser = user;
      this.setState({currentUser: currentUser});
    });

    this.isDropped = this.isDropped.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  isDropped(itemId) {
    return this.state.droppedItemId.indexOf(itemId) > -1;
  }

  handleDrop(item) {
  }
  
  render() {
    const { boxes, items, users, currentUser } = this.state;

    return (
      <div className="app-container">       
        <Page>         
          <Dashboard currentUser={currentUser}/>
          <UserList users={users}/>
          <ItemList items={items} isDropped={this.isDropped}/>
          <BoxList boxes={boxes} items={items} onDrop={this.handleDrop}/>
        </Page>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
