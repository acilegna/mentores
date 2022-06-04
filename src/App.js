import logo from './logo.svg';
import './App.css';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <FontAwesomeIcon icon={faGlobe} />
        </p>
      </header>
    </div>
  );
}

export default App;
