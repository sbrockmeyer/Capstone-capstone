import './sass/style.scss';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState} from 'react';
// import Dictionary from './components/Dictionary';
// import AllShops from './components/AllShops';
// import Login from './components/Login';
// import Home from './components/Home';
// import CreateShop from './components/CreateShop';
// import CreateUser from './components/CreateUser';
// import CreateWord from './components/CreateWord';
// import AllUsers from  './components/AllUsers'
// import logo from './images/Logo.png';
// import EditShop from './components/EditShop';
// import EditWord from './components/EditWord';
// import EditUser from './components/EditUser';
import {Outlet, Link} from 'react-router-dom';


function App() {
  // const [screen, setScreen] = useState("home");

  // const switchScreen = (switchScreen) => {
  //   setScreen(switchScreen);
  // }
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dictionary">Dictionary</Link>
          </li>
          <li>
            <Link to='/allShops'>All Shops</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/allUsers'>All Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}

export default App;
