import React, { Component } from 'react';
import DateFilter from './components/DateFilter';
import AuthorFilter from './components/AuthorFilter';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: undefined,
      date: undefined
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter() {
    this.props.onUpdate(this.state);
  }

  handleAuthorChange(newAuthor) {
    this.setState({
      author: newAuthor
    });
  }

  render() {
    const { authors } = this.props;
    return (
      <div className="filter-bar">
        <DateFilter />
        <AuthorFilter authors={authors} onChange={this.handleAuthorChange}/>
        <input
          name="submit"
          type="button"
          value="Применить"
          onClick={this.applyFilter}
        />
      </div>
    );
  }
}

export default Filter;
