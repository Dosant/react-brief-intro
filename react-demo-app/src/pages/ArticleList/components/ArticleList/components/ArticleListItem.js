import React from 'react';
import PropTypes from 'prop-types';
import { shortDate } from '../../../../../utils/date';
import RenderHtml from '../../../../../utils/renderHtml';

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentOpened: false
    };

    this.toggleContentOpened = this.toggleContentOpened.bind(this);
  }

  toggleContentOpened() {
    this.setState({
      isContentOpened: !this.state.isContentOpened
    });
  }

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
        <hr />
        {this.state.isContentOpened &&
          <div className="article-list-item-content">
            <RenderHtml html={article.content} />
          </div>}
        <div>
          <button onClick={this.toggleContentOpened}>
            {this.state.isContentOpened ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>
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
