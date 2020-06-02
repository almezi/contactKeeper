import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;
	const { error, clearError, isAuthenticated } = authContext;
	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'Invalid Credential') {
			setAlert(error, 'danger');
			clearError();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;
	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		if (email == '' || password == '') {
			setAlert('please insert all field', 'danger');
		} else {
			Login({ email, password });
		}
	};
	return (
		<div className='form-container'>
			<h1>
				account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>email</label>
					<input type='email' name='email' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<input
					type='submit'
					value='login'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Login;
