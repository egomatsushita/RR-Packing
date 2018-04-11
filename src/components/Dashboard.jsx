import React, {Component} from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.currentUsername = "";
    this.boxName = "";
    this.boxTTWeight = "";
    this.itemName = "";
    this.itemWeight = "";

    this.assignName = this.assignName.bind(this);
    this.assignBoxName = this.assignBoxName.bind(this);
    this.assignBoxTtWeight = this.assignBoxTtWeight.bind(this);
    this.assignItemName = this.assignItemName.bind(this);
    this.assignItemWeight = this.assignItemWeight.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  assignName(e) {
    this.currentUsername = e.target.value;
  }

  handleChangeName(e) {
    e.preventDefault();
    this.props.changeName(this.currentUsername);
  }

  assignBoxName(e) {
    this.boxName = e.target.value;
  }

  assignBoxTtWeight(e) {
    this.boxTTWeight = e.target.value;
  }

  assignItemName(e) {
    this.itemName = e.target.value;
  }

  assignItemWeight(e) {
    this.itemWeight = e.target.value;
  }

  handleAddBox(e) {
    e.preventDefault();
    this.props.addBox({
      name: this.boxName,
      total_allowed_weight: this.boxTTWeight
    })
  }

  handleAddItem(e) {
    e.preventDefault();
    this.props.addItem({
      name: this.itemName,
      weight: this.itemWeight
    })
  }

  render() {
    const {currentUser} = this.props;
    return (
      <section className="commands">
        <p className="p-title">Welcome, {currentUser.name}</p>
        <ul className="ul-section">
          <li>
            <input type="text" onBlur={this.assignName}/>
            <input type="button" value="Change Name" onClick={this.handleChangeName}/>
          </li>
          <li>
            <label>Box Name:</label>
            <input type="text" onBlur={this.assignBoxName}/>
            <label>Box Weight:</label>
            <input type="text" onBlur={this.assignBoxTtWeight}/>
            <input type="button" value="Add Box" onClick={this.handleAddBox}/>            
          </li>
          <li>
            <label>Item Name:</label>
            <input type="text" onBlur={this.assignItemName}/>
            <label>Item Weight:</label>
            <input type="text" onBlur={this.assignItemWeight}/>
            <input type="button" value="Add Item" onClick={this.handleAddItem}/>            
          </li>
        </ul>
      </section>
    );
  }
}

export default Dashboard;