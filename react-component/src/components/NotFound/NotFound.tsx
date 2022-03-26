import React from 'react';
import ReactDOM from 'react-dom';
import './NotFound.css';

export class NotFound extends React.Component {
  render() {
    return (
      <div className="error-wrapper">
        <h2 className="error-title">404</h2>
        <div className="error-description">page not found</div>
      </div>
    );
  }
}
