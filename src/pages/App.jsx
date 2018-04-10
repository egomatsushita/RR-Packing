import React, { Component } from 'react';
import '../styles/App.css';
import API from '../api/api';
import { Page } from '../components/Page';
import { ItemList } from '../components/ItemList';
import { BoxList } from '../components/BoxList';
import { UserList } from '../components/UserList';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      items: [],
      users: [],
      droppedItemId: []    
    }
    
    API.updateBoxesState((err, boxes) =>
      this.setState({boxes: this.state.boxes.concat(boxes)})
    );

    API.updateItemsState((err, items) =>
      this.setState({items: this.state.items.concat(items)})
    );

    API.updateUsersState((err, users) =>
      this.setState({users: users})
    );

    this.isDropped = this.isDropped.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  isDropped(itemId) {
    return this.state.droppedItemId.indexOf(itemId) > -1;
  }

  handleDrop(item) {
  }

  render() {
    const { boxes, items, users } = this.state;

    const DisplayCommands = () => {
      return (
        <section className="commands">
          <p className="p-title"></p>          
        </section>
      );
    }
    
    return (
      <div className="app-container">       
        <Page>
          <DisplayCommands />
          <UserList users={users}/>
          <ItemList items={items} isDropped={this.isDropped}/>
          <BoxList boxes={boxes} items={items} onDrop={this.handleDrop}/>
        </Page>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
