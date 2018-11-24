import React, {Component, Fragment} from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: true,
      page: 1
    };
  }

  loadComments() {
    const {page} = this.state;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}}`)
    .then(response => response.json())
    .then(comments => {this.setState({
      isLoading: false,
      page: this.state.page + 1,
      comments: this.state.comments.concat(comments)
    });})
    .catch(() => {this.setState({loading: false});});
  }

  handleScroll = () => {
    if (this.state.isLoading) return;
    if (document.documentElement.scrollHeight - window.scrollY - window.innerHeight === 0) {
      this.loadComments();
    }
  }

  componentWillUnmount() {
    window.removeEventListeneer('scroll', this.handleScroll);
  }

  componentDidMount() {
    this.loadComments();
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const {isLoading, comments} = this.state;
    return (
      <Fragment>
        <CommentsList comments={this.state.comments} />
        {isLoading && <span>Loading...</span>}
      </Fragment>
    );
  }
}
