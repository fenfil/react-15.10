import './app.sass';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import CommentSection from 'containers/CommentSection';

class App extends Component {
	render() {
		return (
      <Fragment>
        <CommentSection />
      </Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
