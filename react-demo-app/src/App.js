import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleListPage from './pages/ArticleListPage/ArticleListPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="content">
            <Route path="/" exact component={ArticleListPage} />
            <Route path="/article/:id" component={ArticlePage} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
