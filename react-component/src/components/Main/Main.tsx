import React from 'react';
import './Main.css';

type MyState = {
  inputValue: string;
};
export class Main extends React.Component {
  state: MyState = {
    inputValue: '',
  };

  componentDidMount() {
    const oldInputValue = localStorage.getItem('inputValue');
    this.setState({
      inputValue: oldInputValue,
    });
  }
  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }
  saveValue(value: string) {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <div className="search-wrapper">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={this.state.inputValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              this.saveValue(e.currentTarget.value);
            }}
          ></input>
          <button className="search-btn"></button>
        </div>
      </div>
    );
  }
}
