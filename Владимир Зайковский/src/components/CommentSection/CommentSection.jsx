import React, {Component} from 'react';

import './CommentSection.sass';
import CommentForm from '../CommentForm';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments || []
    }
  }

  addComment = (comment) => {
    this.setState(old => ({
      ...old,
      comments: this.state.comments.concat(comment)
    }));
  }

  render() {

    const {comments} = this.state;

    return (
      <div className="comment-section">
        <CommentForm onSend={this.addComment} />
        <ul className="comments-list">
          {comments.map((comment, i) =>
            <li key={i} className="comment">
              <span className="comment-author">{comment.author}</span>
              <p className="comment-message">{comment.message}</p>
            </li>)}
        </ul>
      </div>
    );
  }
}
