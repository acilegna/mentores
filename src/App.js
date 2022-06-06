import './App.css';
import {Navbar} from 'components';
import {Home} from 'pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" />
        <Route path=" " />
        <Route path=" " />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
