import React, {Component} from 'react';

import './WidgetCategories.sass';

export default class WidgetCategories extends Component {
  render() {
    return (
      <div className="widget-categories">
        <div className="head">
          <p>Categories</p>
        </div>
        <div className="categories_list">
          <span><a href="#">Web</a></span>
          <span><a href="#">HTML</a></span>
          <span><a href="#">CSS</a></span>
          <span><a href="#">WebGL</a></span>
        </div>
      </div>
    );
  }
}
