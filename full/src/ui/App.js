import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import Logger from 'js-logger'
import { service, getStore } from '../domain';


const log = Logger.get('App');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null
    }
  }

  async componentWillMount() {
    await service.fetchUsers();
    this.setState({ users: getStore().orm.User })
  }

  render() {
    const userElements = this.state.users.map(user =>
      <option key={user.id} value={user.id}>{user.name}</option>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <select value={this.state.value} onChange={this.selectUser}>
            {userElements}
          </select>
        </div>
        <User user={this.state.selectedUser} />
      </div>
    );
  }

  selectUser = (event) => {
    log.debug('selectUser', event.target.value);
    service.selectedUser(event.target.value).then(() => this.setState({ selectedUser: getStore().selectedUser }));
  }
}

export default App;
