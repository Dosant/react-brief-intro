import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator';

import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div>
        {this.props.condition() ? this.props.children : <LoadingIndicator />}
      </div>
    );
  }
}

export default Loader;

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  condition: PropTypes.func.isRequired
};
