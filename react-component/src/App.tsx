import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Cards } from './components/Cards/Cards';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';
import { routers } from './constants';
import { FormPage } from './components/FormPage/FormPage';
import { FullCard } from './components/Main/Cards/FullCard/FullCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routers.ROUTE_MAIN} element={<Main />} />
        <Route path={routers.ROUTE_ABOUT} element={<AboutUs />} />
        <Route path={routers.ROUTE_CARDS} element={<Cards />} />
        <Route path={routers.ROUTE_FORM} element={<FormPage />} />
        <Route path={routers.ROUTE_NOTFOUND} element={<NotFound />} />
        <Route path={routers.ROUTE_FULLCARD} element={<FullCard />} />
      </Routes>
    </div>
  );
}

export default App;
