import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleListPage from './pages/ArticleList/ArticleListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <ArticleListPage articles={this.props.articles} authors={this.props.authors}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
