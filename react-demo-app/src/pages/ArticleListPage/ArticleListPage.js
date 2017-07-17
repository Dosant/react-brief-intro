import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticleList } from '../../actionCreators';

import ArticleList from './components/ArticleList/ArticleList';
import Filter from './components/Filter/Filter';
import Pagination from './components/Pagination/Pagination';
import Loader from '../../components/Loader';

class ArticleListPage extends Component {
  componentDidMount() {
    this.props.fetchArticleList();
  }

  componentWillReceiveProps(nextProps) {
    const filterConfig = this.props.filterConfig;
    const paginationConfig = this.props.paginationConfig;

    const nextFilterConfig = nextProps.filterConfig;
    const nextPaginationConfig = nextProps.paginationConfig;

    if (
      filterConfig !== nextFilterConfig ||
      paginationConfig !== nextPaginationConfig
    ) {
      this.props.fetchArticleList();
    }
  }

  isArticleListLoaded = () => {
    return this.props.articleList && !this.props.articleList.isLoading;
  };

  render() {
    const { articleList } = this.props;
    return (
      <div>
        <Filter />
        <Loader condition={this.isArticleListLoaded}>
          <ArticleList articles={articleList.articles} />
        </Loader>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterConfig: state.filterConfig,
  paginationConfig: state.paginationConfig,
  articleList: state.articleList
});

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleList: () => {
      dispatch(fetchArticleList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);
