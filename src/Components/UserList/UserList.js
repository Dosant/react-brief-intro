import React, {Component} from 'react';
import UserListItem from './UserListItem';

class UserList extends Component {
	render() {
		return (
			<table className='table table-hover'>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
					</tr>
					{this.props.users.map((user) => <UserListItem key={user.id} user={user} />)}
				</tbody>

			</table>
		);
	}
}

UserList.propTypes = {
	users: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default UserList;