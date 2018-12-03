import './app.sass';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import CommentSection from 'containers/CommentSection';

class App extends Component {
	render() {
		return (
      <Fragment>
				<Switch>
					<Route path="/" exact component={CommentSection}/>
				</Switch>
			</Fragment>
		)
	}
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
