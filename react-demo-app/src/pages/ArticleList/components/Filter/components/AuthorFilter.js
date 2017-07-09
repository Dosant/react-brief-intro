import React, { Component } from 'react';

class AuthorFilter extends Component {
  constructor(props) {
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  handleAuthorChange(evt) {
    const authorValue = evt.target.value;
    this.props.onChange(authorValue !== 'all' ? authorValue : undefined);  
  }

  render() {
    const authors = this.props.authors;
    return (
      <div className="filter-item filter-author">
        <span>Фильтр по автору:</span>
        <select name="author" defaultValue={false} onChange={this.handleAuthorChange}>
          <option value="all">Все</option>
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
