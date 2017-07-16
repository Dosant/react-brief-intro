import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo"><Link to="/">React News</Link></div>
    </div>
  );
};

export default Header;
