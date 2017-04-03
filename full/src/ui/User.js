import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>Name: {this.props.user ? this.props.user.name : '...'}</div>
    )
  }
}
