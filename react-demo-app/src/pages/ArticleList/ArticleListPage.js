import React, { Component } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import Filter from './components/Filter/Filter'
import Pagination from './components/Pagination/Pagination'

class ArticleListPage extends Component {
    render() {
        const {articles, authors} = this.props;
        return (
            <div>
                <Filter authors={authors}/>
                <ArticleList articles={articles} />
                <Pagination />
            </div>
        );
    }
}

export default ArticleListPage;