import './App.css';
import NavBar from './components/navbar.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/Search';
import Twitter from './components/Twitter';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Route path="/" exact component={Search} />
        <Route path="/twitter/:id" exact component={Twitter}/>
        
      </div>
    </Router>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
