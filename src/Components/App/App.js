import React, { Component } from 'react';
import Header from '../Header/Header';
import UsersContainer from '../UsersContainer/UsersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UsersContainer users={this.props.users}/>
      </div>
    );
  }
}

export default App;
