import React, { Component } from 'react';

class AuthorFilter extends Component {
  render() {
    const authors = this.props.authors;
    return (
      <div className="filter-item filter-author">
        <span>Фильтр по автору:</span>
        <select name="author" defaultValue={false}>
          <option value={false}>Все</option>
          {authors.map(author =>
            <option value={author} key={author}>
              {author}
            </option>
          )}
        </select>
      </div>
    );
  }
}

export default AuthorFilter;
