import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar.layouts';
import Home from './components/pages/Home.pages';
import About from './components/pages/About.pages';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/alert';
import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/auth/authState';
import AlertState from './Context/alert/alertState';
import SetAuthToken from '../src/utils/setAuthToken';

if (localStorage.token) {
	SetAuthToken(localStorage.token);
}
const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<BrowserRouter>
						<Fragment>
							<Navbar />
							<div className='container'>
								<Alerts />
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/about' component={About} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
								</Switch>
							</div>
						</Fragment>
					</BrowserRouter>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};

export default App;
