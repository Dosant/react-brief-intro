import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../services/data';

import ArticleList from './components/ArticleList/ArticleList';
import Filter from './components/Filter/Filter';
import Pagination from './components/Pagination/Pagination';
import Loader from '../../components/Loader';

class ArticleListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: []
    };

    this.isArticlesLoaded = this.isArticlesLoaded.bind(this);
  }

  componentDidMount() {
    debugger;
    const filterConfig = this.props.filterConfig;
    const paginationConfig = this.props.paginationConfig;
    this.reloadArticles(filterConfig, paginationConfig);
  }

  componentWillReceiveProps(nextProps) {
    const filterConfig = this.props.filterConfig;
    const paginationConfig = this.props.paginationConfig;

    const nextFilterConfig = nextProps.filterConfig;
    const nextPaginationConfig = nextProps.paginationConfig;

    if (filterConfig !== nextFilterConfig || paginationConfig !== nextPaginationConfig) {
      this.reloadArticles(nextFilterConfig, nextPaginationConfig);
    }    
  }

  reloadArticles(filterConfig, paginationConfig) {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        articles: getArticles(
          paginationConfig.skip,
          paginationConfig.top,
          filterConfig
        ),
        isLoading: false
      });
    }, 1000);
  }

  isArticlesLoaded() {
    return !this.state.isLoading;
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <Filter />
        <Loader condition={this.isArticlesLoaded}>
          <ArticleList articles={articles} />
        </Loader>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterConfig: state.filterConfig,
  paginationConfig: state.paginationConfig
});

export default connect(mapStateToProps)(ArticleListPage);
