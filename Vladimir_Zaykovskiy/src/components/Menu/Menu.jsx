import React from 'react';
import PropTypes from 'prop-types';

import './menu.sass';

export default class Menu extends React.Component {

  static propTypes = {
    shape: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired
        })
      )
    })
  }

  render() {

    let items = this.props.shape.items;
    let title = this.props.shape.title;

    return (
      <ul className="menu" name={title}>
        <li>first</li>
        {items.map((e, key) => <li key={key}><a href={e.href}>{e.name}</a></li>)}
      </ul>
    )

  }
}
