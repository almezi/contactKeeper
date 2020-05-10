import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../type';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'doan',
				email: 'doan@gmail.com',
				phone: '111-222',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Bon',
				email: 'Bon@gmail.com',
				phone: '111-222',
				type: 'Profesional',
			},
		],
		//current is for collect data for edit
		current: null,
	};
	const [state, dispatch] = useReducer(ContactReducer, initialState);
	//add contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	//delete contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};
	//set current contact
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};
	//clear current contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};
	//update contact
	//filter contacts
	//clear filters
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
				deleteContact,
				current: state.current,
				setCurrent,
				clearCurrent,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};
export default ContactState;
