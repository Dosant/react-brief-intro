import React, {Component} from 'react';
import UserList from '../UserList/UserList';
import './UserListContainer.css';

class UserListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			sortField: ''
		}
	}

	handeSearchInput(evt) {
		const searchQuery = evt.target.value;
		this.setState({
			...this.state,
			searchQuery
		})
	}

	handleSortChangeName() {
		this.setState({
			...this.state,
			sortField:'name'
		});
	}

	handleSortChangeAge() {
		this.setState({
			...this.state,
			sortField:'age'
		});
	}

	filterUsers(users) {
		if (!this.state.searchQuery) {
			return users;
		} else {
			return users.filter((user) => user.name.indexOf(this.state.searchQuery) > -1);
		}
	}

	sortUsers(users) {
		if (!this.state.sortField) {
			return users;
		} else {
			return users.sort((user1, user2) => {
				return user1[this.state.sortField] > user2[this.state.sortField] ? 1 : -1;
			})
		}
	}

	renderUsers(users) {
		return this.sortUsers(this.filterUsers(users));
	}

	render() {
		return (
			<div>
				<div className="user-list-container__toolbar row">
					<div className='col-xs-6'>
						<input type="text" className="form-control" placeholder="Filter By Name" value={this.state.searchQuery} onChange={this.handeSearchInput.bind(this)}/>
					</div>
					<div className='col-xs-6'>
						<button className='btn btn-default' onClick={this.handleSortChangeName.bind(this)}>Sort By Name</button>
						<button className='btn btn-default' onClick={this.handleSortChangeAge.bind(this)}>Sort By Age</button>
					</div>
				</div>
				<UserList users={this.renderUsers(this.props.users)} selectUser={this.props.selectUser}/>
			</div>
		);
	}
}

export default UserListContainer;