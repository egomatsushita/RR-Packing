import React, { Component } from 'react';
import '../styles/App.css';
import API from '../api/api';
import { Page } from '../components/Page';
import { ItemList } from '../components/ItemList';
import { BoxList } from '../components/BoxList';
import { UserList } from '../components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      items: [],
      users: []    
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
          <ItemList items={items}/>
          <BoxList boxes={boxes} items={items}/>
        </Page>
      </div>
    );
  }
}

export default App;
