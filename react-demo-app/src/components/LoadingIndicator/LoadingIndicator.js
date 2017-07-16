import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div className="sk-chasing-dots">
      <div className="sk-child sk-dot1" />
      <div className="sk-child sk-dot2" />
    </div>
  );
};

export default LoadingIndicator;
