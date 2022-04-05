import React from 'react';
import './AboutUs.css';

export class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs-wrapper">
        <h2 className="aboutUs-title" data-testid="about-page">
          About Us
        </h2>
      </div>
    );
  }
}
