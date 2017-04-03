import React, { Component } from 'react';


export default class Posts extends Component {
  render() {
    const postsElements = this.props.posts ? this.props.posts.map(post =>
      <li key={post.id}>{post.title}</li>) : null;

    return (
      <ul>
        {postsElements}
      </ul>
    )
  }
}
