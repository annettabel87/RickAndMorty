import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Cards } from './components/Cards/Cards';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';
import { routers } from './constants';
import { FormPage } from './components/FormPage/FormPage';
import { GlobalMainContext } from './components/state/context';
import { mainReducer, mainState } from './components/state/reducer';
import './App.css';
import { GlobalFormContext } from './components/state/formContext';
import { formReducer, formState } from './components/state/formReducer';

function App() {
  const [state, dispatch] = useReducer(mainReducer, mainState);
  const [formstate, formDispatch] = useReducer(formReducer, formState);
  return (
    <GlobalMainContext.Provider
      value={{ state: state.data, searchValue: state.searchValue, dispatch }}
    >
      <GlobalFormContext.Provider value={{ formstate: formstate.data, formDispatch }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path={routers.ROUTE_MAIN} element={<Main />} />
            <Route path={routers.ROUTE_ABOUT} element={<AboutUs />} />
            <Route path={routers.ROUTE_CARDS} element={<Cards />} />
            <Route path={routers.ROUTE_FORM} element={<FormPage />} />
            <Route path={routers.ROUTE_NOTFOUND} element={<NotFound />} />
          </Routes>
        </div>
      </GlobalFormContext.Provider>
    </GlobalMainContext.Provider>
  );
}

export default App;
