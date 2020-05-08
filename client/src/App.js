import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar.layouts';
import Home from './components/pages/Home.pages';
import About from './components/pages/About.pages';

import ContactState from './Context/Contact/ContactState';

const App = () => {
	return (
		<ContactState>
			<BrowserRouter>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</Fragment>
			</BrowserRouter>
		</ContactState>
	);
};

export default App;
