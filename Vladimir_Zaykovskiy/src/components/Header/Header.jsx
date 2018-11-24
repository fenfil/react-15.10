import React, {Component} from 'react';

import './Header.sass';
import Container from '../Container';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <div>
            <span className="page-title">Blog by Vladimir</span>
          </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
