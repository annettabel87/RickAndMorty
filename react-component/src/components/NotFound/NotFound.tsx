import React, { FC } from 'react';
import './NotFound.css';

export const NotFound: FC = () => {
  return (
    <div className="error-wrapper">
      <h2 className="error-title">404</h2>
      <div className="error-description">page not found</div>
    </div>
  );
};
