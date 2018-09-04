// REACT
import React from 'react';
import { render } from 'react-dom';

// COMPONENTS
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {PropTypes} from 'prop-types';

// CSS
import './style/SASS/style.css';


//stateless component
const Root = () =>  {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Connexion} />
				<Route path="/pseudo/:pseudo" component={App} />
				<Route component={NotFound} />
			</Switch>
	</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));

/*
<Match> and <Miss> were components in the alpha release of React Router v4.
In the beta, <Match> has been renamed <Route> (and its props have changed so that pattern is now path and exactly is exact). 
The <Miss> component was removed entirely. 
Instead you should use a <Switch> statement, which will only render the first <Route> (or <Redirect>) that is matched. 
You can add a pathless component as the last child of the <Switch>'s routes and it will render when none of the preceding <Route>s match.
You can check out the API documentation for more details.
*/