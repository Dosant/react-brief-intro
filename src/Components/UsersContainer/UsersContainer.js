import React, {Component} from 'react';
import UserListContainer from '../UserListContainer/UserListContainer';
import UserDetails from '../UserDetails/UserDetails';

class UsersContainer extends Component {
	render() {
		return (
			<div className='container row'>
				<div className='col-xs-3'>
					<UserDetails user={this.props.users[0]} />
				</div>
				<div className='col-xs-9'>
					<UserListContainer users={this.props.users}/>
				</div>
			</div>
		);
	}
}

export default UsersContainer;