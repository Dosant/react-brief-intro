import React, { Component } from 'react';
import DateFilter from './components/DateFilter';
import AuthorFilter from './components/AuthorFilter';

class Filter extends Component {
  render() {
    const { authors } = this.props;
    return (
      <div className="filter-bar">
        <DateFilter />
        <AuthorFilter authors={authors}/>  
        <input name="submit" type="button" value="Применить" />
      </div>
    );
  }
}

export default Filter;
