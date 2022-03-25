import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Cards } from './components/Cards/Cards';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutUs />
      <Cards />
      <NotFound />
    </div>
  );
}

export default App;
