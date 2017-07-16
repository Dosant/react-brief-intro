import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore() {
    this.props.onUpdate({
      skip: this.props.config.skip,
      top: this.props.config.top + 3,
    })
  }

  render() {
    return (
      <div className="pagination-bar">
        <button onClick={this.handleShowMore}>Показать ещё</button>
      </div>
    );
  }
}

export default Pagination;
