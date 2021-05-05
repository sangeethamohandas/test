import './App.css';
import Login from "./components/Login";
import Reset from "./components/Reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/resetpassword' component={Reset} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
