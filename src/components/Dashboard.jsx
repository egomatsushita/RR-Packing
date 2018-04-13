import React, {Component} from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.currentUsername = "";
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChangeName(e) {
    e.preventDefault();
    let newUsernameInput = this.refs.newUsername.value;
    this.props.changeName(newUsernameInput);
    this.cleanInput().user();
  }

  handleAddItem(e) {
    e.preventDefault();
    let newItemNameInput = this.refs.newItemName.value;
    let newItemWeightInput = this.refs.newItemWeight.value;
    this.props.addItem({
      name: newItemNameInput,
      weight: +newItemWeightInput
    });
    this.cleanInput().items();
  }

  handleAddBox(e) {
    e.preventDefault();
    let newBoxNameInput = this.refs.newBoxName.value;
    let newBoxWeightInput = this.refs.newBoxWeight.value;
    this.props.addBox({
      name: newBoxNameInput,
      total_allowed_weight: +newBoxWeightInput
    });
    this.cleanInput().boxes();
  }

  cleanInput() {
    const user = () => {
      this.refs.newUsername.value = "";
    }
    const boxes = () => {
      this.refs.newBoxName.value = "";
      this.refs.newBoxWeight.value = "";
    }
    const items = () => {
      this.refs.newItemName.value = "";
      this.refs.newItemWeight.value = "";
    }
    return {
      boxes: boxes,
      items: items,
      user: user
    }
  }

  render() {
    const {currentUser} = this.props;
    return (
      <section className="commands">
        <p className="p-title">
          Welcome, {currentUser.name}
        </p>
        <ul className="ul-section ul-section-add">
          <p className="p-title">User</p>
          <li className="add-username">
            <input 
              type="text" 
              placeholder="Username (Optional)" 
              ref="newUsername" 
              onBlur={this.assignName} 
            />
            <input 
              type="button" 
              className="btn" 
              value="Change Name" 
              onClick={this.handleChangeName}
            />
          </li>
        </ul>
        <ul className="ul-section ul-section-add">
          <p className="p-title">Item</p>
          <li>
            <label>Name:</label>
            <input 
              type="text" 
              ref="newItemName" 
              onBlur={this.assignItemName}
            />
          </li>
          <li>
            <label>Weight:</label>
            <input 
              type="text" 
              ref="newItemWeight" 
              onBlur={this.assignItemWeight}
            />
          </li>
          <div className="addBtn">
            <input 
              type="button" 
              className="btn" 
              value="Add" 
              onClick={this.handleAddItem}
            />            
          </div>
        </ul>
        <ul className="ul-section ul-section-add">
          <p className="p-title">Box</p>
          <li>
            <label>Name:</label>
            <input 
              type="text" 
              ref="newBoxName"
              onBlur={this.assignBoxName}
            />
          </li>
          <li>
            <label>Weight:</label>
            <input 
              type="text" 
              ref="newBoxWeight" 
              onBlur={this.assignBoxTtWeight}
            />
          </li>
          <div className="addBtn">
            <input 
              type="button" 
              className="btn" 
              value="Add" 
              onClick={this.handleAddBox}
            />            
          </div>       
        </ul>        
      </section>
    );
  }
}

export default Dashboard;