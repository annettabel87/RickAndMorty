import React from 'react';
import { Form } from './Form/Form';
import './FormPage.css';

export class FormPage extends React.Component {
  render() {
    return (
      <div className="form-container">
        <Form />
      </div>
    );
  }
}
