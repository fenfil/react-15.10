import React, {Component, Fragment} from 'react';
import Moment from 'moment';

export default class Date extends Component {
  render() {
    let timeStamp = this.props.timeStamp.format('MMMM Do YYYY, h:mm:ss a');
    return (
      <Fragment>
        <span>{timeStamp.toString()}</span>
      </Fragment>
    );
  }
}
