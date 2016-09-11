import React, {Component} from 'react';
import UserList from '../UserList/UserList';
import './UserListContainer.css';

class UserListContainer extends Component {
	render() {
		return (
			<div>
				<div className="user-list-container__toolbar row">
					<div className='col-xs-6'>
						<input type="text" className="form-control" placeholder="Filter By Name" />
					</div>
					<div className='col-xs-6'>
						<button className='btn btn-default'>Sort By Name</button>
						<button className='btn btn-default'>Sort By Age</button>
					</div>
				</div>
				<UserList users={this.props.users}/>
			</div>
		);
	}
}

export default UserListContainer;