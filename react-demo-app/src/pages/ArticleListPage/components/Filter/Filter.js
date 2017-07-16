import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateFilter from './components/DateFilter';
import AuthorFilter from './components/AuthorFilter';
import Loader from '../../../../components/Loader';
import { getAuthors } from '../../../../services/data';
import { changeFilter } from '../../../../actionCreators';

class Filter extends Component {
  constructor(props) {
    super(props);

    // this is local state of Filter
    // this will only go into application state (redux store)
    // after applyFilter() is called
    this.state = {
      author: undefined,
      date: undefined
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.isAuthorsLoaded = this.isAuthorsLoaded.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  componentDidMount() {
    // init local state with filters from application state
    this.setState(this.props.filterConfig);
  }

  isAuthorsLoaded() {
    return true;
  }

  handleAuthorChange(newAuthor) {
    this.setState({
      author: newAuthor
    });
  }

  applyFilter() {
    this.props.handleFilterChange(this.state);
  }

  render() {
    return (
      <div className="filter-bar">
        <DateFilter />
        <Loader condition={this.isAuthorsLoaded}>
          <AuthorFilter
            currentAuthor={this.state.author}
            authors={getAuthors()}
            onChange={this.handleAuthorChange}
          />
        </Loader>
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

const mapStateToProps = state => {
  return {
    filterConfig: state.filterConfig
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterChange: newFilter => {
      dispatch(changeFilter(newFilter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
