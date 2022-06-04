import logo from './logo.svg';
import './App.css';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Navbar} from 'components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/mentor" />
        <Route path=" " />
        <Route path=" " />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
