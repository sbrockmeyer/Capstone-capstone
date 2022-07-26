import './sass/style.scss';
import { useState, useEffect } from 'react';
import Dictionary from './components/Dictionary';
import AllShops from './components/AllShops';
import Login from './components/Login';
import EditUser from './components/EditUser'
import Home from './components/Home';
import ShopDetails from './components/ShopDetails';
import CreateShop from './components/CreateShop';
import CreateUser from './components/CreateUser';
import CreateWord from './components/CreateWord';


function App() {
  const [screen, setScreen] = useState("home");
  
  return (
    <div>
      <nav>
        <button onClick={() => setScreen("home")}>Home</button>
        <button onClick={() => setScreen("create user")}>Create User</button>
        <button onClick={() => setScreen("create shop")}>Create Shop</button>
        <button onClick={() => setScreen("create word")}>Create Word</button>
        <button onClick={() => setScreen("login")}>Login</button>
        <button onClick={() => setScreen("dictionary")}>Dictionary</button>
      </nav>
      {
        screen === "home" ?
        <Home/>
        : screen === "create user" ?
        <CreateUser/>
        : screen === "login"?
        <Login/>
        : screen === "dictionary" ?
        <Dictionary/>
        : screen === "create shop" ?
        <CreateShop/>
        : screen === "create word" ?
        <CreateWord/>
        : null
      }
    </div>
  );
}

export default App;
