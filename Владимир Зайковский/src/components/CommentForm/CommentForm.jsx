import React, {Component, Fragment} from 'react';

import './CommentForm.sass';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      message: ''
    };
  }

  handleClick = () => {
    let comment = {
      author: this.state.author,
      message: this.state.message
    }
    this.props.onSend(comment);
    this.setState({message: ''});
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {author, message} = this.state;
    return (
      <div className="comment-form">
        <input onChange={this.handleChange} name="author" value={this.state.author} type="text" placeholder="Name" /><br />
        <textarea onChange={this.handleChange} name="message" value={this.state.message} placeholder="Message.."></textarea><br />
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}
