import React from 'react';
import PropTypes from 'prop-types';
import { shortDate } from '../../../../../utils/date';
import { Link } from 'react-router-dom';

class ArticleListItem extends React.Component {
  render() {
    const article = this.props.article;

    return (
      <div className="article-list-item">
        <h3 className="article-list-item-title">
          {article.title}
        </h3>
        <p className="article-list-item-summary">
          {article.summary}
        </p>
        <div className="article-list-item-meta">
          <span>
            Автор:{' '}
            <span className="article-list-item-author">{article.author}</span>
          </span>
          <span>
            Опубликована:{' '}
            <span className="article-list-item-date">
              {shortDate(article.createdAt)}
            </span>
          </span>
        </div>
        <Link to={`/article/${article.id}`}>Подробнее</Link>
      </div>
    );
  }
}

ArticleListItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date),
    content: PropTypes.string,
  }).isRequired
}

export default ArticleListItem;
