import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/Search';
import Twitter from './components/Twitter';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route path="/" exact component={Search} />
        <Route path="/twitter/:id" exact component={Twitter}/>
        <Route path="/about" exact component={About}/>
      </div>
    </Router>
  );
}

export default App;
