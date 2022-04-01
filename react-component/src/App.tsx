import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Cards } from './components/Cards/Cards';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';
import { routers } from './constants';
import { Form } from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routers.ROUTE_MAIN} element={<Main />} />
        <Route path={routers.ROUTE_ABOUT} element={<AboutUs />} />
        <Route path={routers.ROUTE_CARDS} element={<Cards />} />
        <Route path={routers.ROUTE_FORM} element={<Form />} />
        <Route path={routers.ROUTE_NOTFOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
