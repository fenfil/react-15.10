import './CommentsList.sass';

import React, { Component, Fragment } from 'react';

export default class CommentsList extends Component {
  render() {
    const {comments} = this.props;
    return (
      <ul>
        {comments.map(comment =>
          <li key={comment.id}>
            <strong>{comment.email}</strong>
            <span>{comment.body}</span>
          </li>
        )}
      </ul>
    )
  }
}
