import './App.css';
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
