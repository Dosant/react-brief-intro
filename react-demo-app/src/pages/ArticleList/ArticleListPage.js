import React, { Component } from 'react';
import { getArticles, getAuthors } from '../../services/data';

import ArticleList from './components/ArticleList/ArticleList';
import Filter from './components/Filter/Filter';
import Pagination from './components/Pagination/Pagination';
import Loader from '../../components/Loader';

class ArticleListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: [],
      authors: [],
      filterConfig: {},
      paginationConfig: {
        skip: 0,
        top: 3
      }
    };

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.handlePaginationUpdate = this.handlePaginationUpdate.bind(this);
    this.isArticlesLoaded = this.isArticlesLoaded.bind(this);
  }

  componentDidMount() {
    this.setState({
      authors: getAuthors()
    });
    this.reloadArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.filterConfig !== prevState.filterConfig ||
      this.state.paginationConfig !== prevState.paginationConfig
    ) {
      this.reloadArticles();
    }
  }

  reloadArticles() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        articles: getArticles(
          this.state.paginationConfig.skip,
          this.state.paginationConfig.top,
          this.state.filterConfig
        ),
        isLoading: false
      });
    }, 1000);
  }

  handlePaginationUpdate(newPaginationConfig) {
    this.setState({
      paginationConfig: newPaginationConfig
    });
  }

  handleFilterUpdate(newFilterConfig) {
    this.setState({
      filterConfig: newFilterConfig
    });
  }

  isArticlesLoaded() {
    return !this.state.isLoading
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <div>
        <Filter
          authors={authors}
          config={this.state.filterConfig}
          onUpdate={this.handleFilterUpdate}
        />
        <Loader condition={this.isArticlesLoaded}>
          <ArticleList articles={articles} />
        </Loader>
        <Pagination
          config={this.state.paginationConfig}
          onUpdate={this.handlePaginationUpdate}
        />
      </div>
    );
  }
}

export default ArticleListPage;
