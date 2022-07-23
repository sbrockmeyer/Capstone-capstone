import './sass/style.scss';
import { useState, useEffect } from 'react';
import Dictionary from './components/Dictionary';
import AllShops from './components/AllShops';
import Login from './components/Login';
// import EditUser from './components/EditUser'
import Home from './components/Home';
import ShopDetails from './components/ShopDetails';
import CreateShop from './components/CreateShop';
import CreateUser from './components/CreateUser';
import CreateWord from './components/CreateWord';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  // const [login, setLoggingin] = useState([]);

  

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/logIn">LogIn</Link>
        <Link to="/dictionary">Dictionary</Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/logIn">
          <Login/>
        </Route>
        <Route path="/dictionary">
          <Dictionary/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
