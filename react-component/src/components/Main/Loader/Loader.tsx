import React from 'react';
import './Loader.css';

export class Loader extends React.Component {
  render() {
    return <div className="loader-box" data-testid="loader"></div>;
  }
}
