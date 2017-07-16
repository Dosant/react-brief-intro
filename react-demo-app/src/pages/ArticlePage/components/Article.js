import React from 'react';
import PropTypes from 'prop-types';
import RenderHtml from '../../../utils/renderHtml';

const Article = ({ article }) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <RenderHtml html={article.content} />
        </div>
    );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date),
    content: PropTypes.string,
  }).isRequired
}

export default Article;