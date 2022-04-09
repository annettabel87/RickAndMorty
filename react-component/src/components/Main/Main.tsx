import React, { ChangeEvent } from 'react';
import { Search } from './Search/Search';
import { EmptyProps } from '../FormPage/FormPage';
import { apiConstants } from '../../constants';
import { CardsField } from './Cards/CardsField';
import './Main.css';

export interface IRickAndMortyData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
type SearchState = {
  data: IRickAndMortyData[];
  searchValue: string;
  isLoaded: boolean;
};
export interface ISearchProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  reset: () => void;
  searchValue: string;
}
export class Main extends React.Component<EmptyProps, SearchState> {
  state: SearchState;
  constructor(props = {}) {
    super(props);
    this.state = { data: [], searchValue: '', isLoaded: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount() {
    const oldSearchValue = localStorage.getItem('inputValue');
    if (oldSearchValue) {
      this.setState({
        searchValue: oldSearchValue,
      });
    }
    try {
      const response = await fetch(apiConstants.characterUrl);
      const data = await response.json();
      this.setState({ data: data.results });
    } catch (err) {
      console.log(err);
    }
  }
  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.searchValue);
  }
  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }
  async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({ isLoaded: true });
    try {
      const response = await fetch(`${apiConstants.characterUrl}/?name=${this.state.searchValue}`);
      const data = await response.json();
      this.setState({ data: data.results });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoaded: false });
      this.setState({ searchValue: '' });
    }
  }
  reset() {
    this.setState({
      searchValue: '',
    });
  }
  render() {
    return (
      <div className="mainPage" data-testid="main-page">
        <h2 className="mainPage-title">Rick and Morty</h2>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          reset={this.reset}
          searchValue={this.state.searchValue}
        />
        <CardsField {...this.state.data} />
      </div>
    );
  }
}
