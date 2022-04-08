import React, { ChangeEvent } from 'react';
import './Search.css';

type SearchState = {
  inputValue: string;
};
export class Search extends React.Component {
  state: SearchState;
  constructor(props = {}) {
    super(props);
    this.state = { inputValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const oldInputValue = localStorage.getItem('inputValue');
    if (oldInputValue) {
      this.setState({
        inputValue: oldInputValue,
      });
    }
  }
  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="search-wrapper" data-testid="main-page">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button className="search-btn"></button>
        </div>
      </div>
    );
  }
}
