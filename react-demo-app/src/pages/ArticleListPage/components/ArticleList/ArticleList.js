import React, { Component } from 'react';
import ArticleListItem from './components/ArticleListItem';

class ArticleList extends Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="article-list">                
                    {
                        articles.map((article) => {
                            return (
                                <ArticleListItem key={article.id} article={article} />
                            );
                        })
                    }
                </div>
        );
    }
}

export default ArticleList;