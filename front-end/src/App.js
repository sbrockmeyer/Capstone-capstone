import './sass/style.scss';
import { useState} from 'react';
import Dictionary from './components/Dictionary';
import AllShops from './components/AllShops';
import Login from './components/Login';
import Home from './components/Home';
import CreateShop from './components/CreateShop';
import CreateUser from './components/CreateUser';
import CreateWord from './components/CreateWord';
import logo from './images/Logo.png';


function App() {
  const [screen, setScreen] = useState("home");
  
  return (
    <div>
      <img className='logo' src={logo} alt='logo'width="115" height="105"/>
      <br/>
      <nav>
        <button onClick={() => setScreen("home")}>Home</button>
        <button onClick={() => setScreen("create user")}>Create User</button>
        <button onClick={() => setScreen("create shop")}>Create Shop</button>
        <button onClick={() => setScreen("create word")}>Create Word</button>
        <button onClick={() => setScreen("login")}>Login</button>
        <button onClick={() => setScreen("dictionary")}>Dictionary</button>
        <button onClick={() => setScreen("shops")}>See all shops</button>
      </nav>
      <br/>
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
        :screen === "shops" ?
        <AllShops/>
        : null
      }
    </div>
  );
}

export default App;
