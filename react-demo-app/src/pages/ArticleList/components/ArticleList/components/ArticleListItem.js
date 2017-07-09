import React from 'react';
import {shortDate} from '../../../../../utils/date';

const ArticleListItem = (props) => {
    const article = props.article;

    return (
        <div className="article-list-item">
            <h3 className="article-list-item-title">
                {article.title}
            </h3>
            <p className="article-list-item-summary">
                {article.summary}
            </p>
            <div className="article-list-item-meta">
                <span>Автор: <span className="article-list-item-author">{article.author}</span></span>
                <span>Опубликована: <span className="article-list-item-date">{shortDate(article.createdAt)}</span></span>
            </div>
        </div>
    );
};

export default ArticleListItem;