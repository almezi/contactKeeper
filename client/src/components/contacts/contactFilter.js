import React, { useEffect, useRef, useContext } from 'react';
import ContactContext from '../../Context/Contact/ContactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef('');
	const { filterContacts, clearFilter, filtered } = contactContext;
	const onChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};
	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	return (
		<div>
			<form>
				<input
					ref={text}
					type='text'
					placeholder='Filter Contact'
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default ContactFilter;
