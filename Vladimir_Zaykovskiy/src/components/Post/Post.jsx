import React, {Component} from 'react';

import './Post.sass';

import Date from '../Date';

let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!"

export default class Post extends Component {
  render() {
    return (
      <div>
        <h2>Post title</h2>
        <h2>by ...</h2>
        <hr/>
        <p>Posted on <Date timeStamp={this.props.timeStamp} /></p>
        <hr/>
        <p>
          {text}
        </p>
      </div>
    );
  }
}
