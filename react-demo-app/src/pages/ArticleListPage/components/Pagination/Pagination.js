import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePagination } from '../../../../actionCreators';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore() {
    this.props.handleShowMore({
      skip: this.props.paginationConfig.skip,
      top: this.props.paginationConfig.top + 3
    });
  }

  render() {
    return (
      <div className="pagination-bar">
        <button onClick={this.handleShowMore}>Показать ещё</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ paginationConfig: state.paginationConfig });

const mapDispatchToProps = dispatch => {
  return {
    handleShowMore: newPagination => {
      dispatch(changePagination(newPagination));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
