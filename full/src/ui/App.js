import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
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
    this.setState({ users: getStore().orm.User });
    if(getStore().orm.User) this.selectUser(getStore().orm.User[0].id);
  }

  render() {
    const userElements = this.state.users.map(user =>
      <option key={user.id} value={user.id}>{user.name}</option>);
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo-container"><img src={logo} className="App-logo" alt="logo" /></div>
          <select value={this.state.value} onChange={(event) => this.selectUser(event.target.value)}>
            {userElements}
          </select>
        </div>
        <h2>Posts</h2>
        <Posts posts={this.state.selectedUser ? this.state.selectedUser.getPosts(): []} />
      </div>
    );
  }

  selectUser = (id) => {
    log.debug('selectUser', id);
    service.selectUser(id).then(() => this.setState({ selectedUser: getStore().selectedUser }));
  }
}

export default App;
