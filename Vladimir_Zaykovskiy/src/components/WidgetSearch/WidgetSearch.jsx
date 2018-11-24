import React, {Component} from 'react';

import './WidgetSearch.sass';

export default class WidgetSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSearch: ''
    };
  }
  handleChange = () => {
    this.setState({
      searchText: e.target.value
    });
  }
  render() {
    return (
      <div className="widget-search">
        <div className="head">
          <p>Search</p>
        </div>
        <div>
          <input onChange={this.handleChange} value={this.state.searchText} type="text" className="search-input" />
        </div>
      </div>
    );
  }
}
