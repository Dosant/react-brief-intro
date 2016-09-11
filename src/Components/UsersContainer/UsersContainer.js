import React, {Component} from 'react';
import UserListContainer from '../UserListContainer/UserListContainer';
import UserDetails from '../UserDetails/UserDetails';

class UsersContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentId: props.users[0].id
		}
	}

	getCurrentUser() {
		return this.props.users
			.filter((user) => user.id === this.state.currentId)[0];
	}

	handleCurrentUserSelect(newId) {
		this.setState({
			currentId: newId
		})
	}

	render() {
		return (
			<div className='container row'>
				<div className='col-xs-3'>
					<UserDetails user={this.getCurrentUser()} />
				</div>
				<div className='col-xs-9'>
					<UserListContainer users={this.props.users} selectUser={this.handleCurrentUserSelect.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default UsersContainer;