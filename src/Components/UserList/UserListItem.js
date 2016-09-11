import React from 'react';

export default function UserListItem (props) {
	const user = props.user;
	return (
		<tr onClick={() => props.selectUser(user.id)}>
			<td>{user.name}</td>
			<td>{user.age}</td>
			<td>{user.phone}</td>
		</tr>
	);
};
