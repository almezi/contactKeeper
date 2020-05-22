import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
import Axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../type';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		error: null,
		user: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);
	//load user
	const loadUser = () => {
		console.log('Login User');
	};
	//register user
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await Axios.post('/api/users', formData, config);
			dispatch({ type: REGISTER_SUCCESS, payload: res.data });
		} catch (err) {
			dispatch({ type: REGISTER_FAIL, payload: err.res.data.msg });
		}
	};
	// login user
	const loginUser = () => {
		console.log('Login User');
	};
	// logout
	const logoutUser = () => {
		console.log('Login User');
	};
	// clear errors
	const clearError = () => {
		dispatch({ type: CLEAR_ERRORS });
	};
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				error: state.error,
				user: state.user,
				register,
				loadUser,
				loginUser,
				logoutUser,
				clearError,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
