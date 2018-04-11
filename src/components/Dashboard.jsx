import React, {Component} from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.currentUsername = "";
    this.assignName = this.assignName.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  assignName(e) {
    this.currentUsername = e.target.value;
  }

  handleChangeName(e) {
    e.preventDefault();
    this.props.changeName(this.currentUsername);
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
        </ul>
      </section>
    );
  }
}

export default Dashboard;