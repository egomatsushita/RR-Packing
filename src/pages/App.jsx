import React, { Component } from 'react';
import '../styles/App.css';
import { updateBoxesState } from '../api/api';
import { Page } from '../components/Page';
import { ItemList } from '../components/ItemList';
import { BoxList } from '../components/BoxList';
import { UserList } from '../components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
      // items: "",
      // users: "",
      
    }
    
    updateBoxesState((err, box) =>
      this.setState({boxes: this.state.boxes.concat(box)})
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
          // <UserList users={users}/>
          // <ItemList items={items}/>

    return (
      <div className="app-container">       
        <Page>
          <BoxList boxes={boxes} />
          <DisplayCommands />
        </Page>
      </div>
    );
  }
}

export default App;
