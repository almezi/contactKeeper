import React, { useContextS, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/contactFilter';
import AuthContext from '../../Context/auth/authContext';
const Home = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser;
		//eslint-disable-next-line
	}, []);
	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
