import React from 'react';
import './UserDetails.css';

export default function UserDetails(props) {
	const user = props.user;

	return (
		<div className='user-details'>
			<h4>
				{user.name}
			</h4>
			<p>
				Age: {user.age}
			</p>
			<p>
				Phone: {user.phone}
			</p>
		</div>
	);
}