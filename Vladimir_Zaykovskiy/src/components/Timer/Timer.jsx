import './Timer.sass';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {timestamp: 0, isset: false};
  }

  handleClick = (e) => {
    if (this.state.isset) {
      this.setState({isset: false});
      this.unsetTimer();
    } else {
      this.setState({isset: true});
      this.setTimer();
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(this.state.timestamp);
      this.setState({timestamp: this.timestamp + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {timestamp} = this.state;
    return (
      <div>
        {isset && <span className="Timer">
          {timestamp}
        </span>}
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    )
  }
}
