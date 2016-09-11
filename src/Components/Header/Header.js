import React from 'react'
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<img src={logo} className='app-logo' alt='logo' />
				<h2>Welcome to React</h2>
			</div>
		)
	}
}

export default Header
