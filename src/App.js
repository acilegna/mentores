import logo from './logo.svg';
import './App.css';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Navbar, Footer} from 'components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from 'pages';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/mentor" />
          <Route path=" " />
          <Route path=" " />
        </Routes>
      </BrowserRouter>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
export default App;
