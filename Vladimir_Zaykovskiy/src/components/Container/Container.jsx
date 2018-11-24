import React from 'react';
import './Container.sass';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
