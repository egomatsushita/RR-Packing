import React, { Component } from 'react';
//import './App.css';
import { test } from '../api/api';
import { Page } from '../components/Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //message: "no message",
      boxes: [
        {
          "id": "603f95f25f84427cb6971b6318f93311",
          "name": "box A",
          "total_allowed_weight": 10
        },
        {
          "id": "17cd977bdb7b4bb8ab8368ad64134967",
          "name": "box B",
          "total_allowed_weight": 20
        },
        {
          "id": "3208c2299a0a4e3abbfa4cf2e600d917",
          "name": "box C",
          "total_allowed_weight": 5
        },
        {
          "id": "176c0a0bc9e74ae78be0c8079bda57a7",
          "name": "box D",
          "total_allowed_weight": 4
        }
      ],
      items: [
        {
          "id": "06712e75c1484fe897cdd90246ac4052",
          "name": "socks",
          "weight": 1,
          "box_id": null
        },
        {
          "id": "5a68368839704596b476757443deeafc",
          "name": "doughnuts",
          "weight": 1,
          "box_id": null
        },
        {
          "id": "f61d6425de4f4993bc3cfdcff41bfd84",
          "name": "laptop",
          "weight": 4,
          "box_id": null
        },
        {
          "id": "a4f173aadb5946a8b016875ca36381c8",
          "name": "watermelon",
          "weight": 7,
          "box_id": null
        },
        {
          "id": "430c6e28b3b24720aedf174a35275563",
          "name": "raspberry pi",
          "weight": 2,
          "box_id": null
        },
        {
          "id": "c61fa46fd9634e63a753bd076512a96b",
          "name": "books",
          "weight": 12,
          "box_id": null
        },
      ],
      users: [
        {
          "id": 1,
          "name": "Madonna"
        },
        {
          "id": 2,
          "name": "Eddie Vedder"
        },
        {
          "id": 3,
          "name": "Bono Vox"
        },
        {
          "id": 4,
          "name": "Bruce Dickinson"
        }
      ]
    }
    test((err, message) => {
      this.setState({message})
    });
  }
/*        <p>
          This is the test value: {this.state.message}
        </p>
*/
  render() {
    const { boxes, items } = this.state;
    const DisplayBoxes = () => {
      return(
        <div className="boxes">
          <ul>
            {this.state.boxes.map(box =>
              <li>{box.id} {box.name} {box.total_allowed_weight}</li>
            )}
          </ul>       
        </div>
      );
    }

    const DisplayItems = () => {
      return(
        <div className="items">
          <ul>
            {this.state.items.map(item =>
              <li>{item.id} {item.name} {item.weight}</li>)}
          </ul>
        </div>
      );
    }

    const DisplayUsers = () => {
      return(
        <div className="users">
          <ul>
            {this.state.users.map(item =>
              <li>{item.id} {item.name} {item.weight}</li>)}
          </ul>
        </div>
      );
    }

    return (
      <div className="app-container">
        
        <Page>
          Hello world!
          <DisplayUsers/>
          <hr/>
          <DisplayBoxes />
          <hr/>
          <DisplayItems/>
        </Page>
      </div>
    );
  }
}

export default App;
