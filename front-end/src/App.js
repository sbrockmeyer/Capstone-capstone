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
      {/* <br/> */}
      <nav>
        <img className='logo' src={logo} alt='logo'width="115" height="105"/>
        <button className='navButton' onClick={() => setScreen("home")}>Home</button>
        <button className='navButton' onClick={() => setScreen("create user")}>Create User</button>
        <button className='navButton' onClick={() => setScreen("create shop")}>Create Shop</button>
        <button className='navButton' onClick={() => setScreen("create word")}>Create Word</button>
        <button className='navButton' onClick={() => setScreen("login")}>Login</button>
        <button className='navButton' onClick={() => setScreen("dictionary")}>Dictionary</button>
        <button className='navButton' onClick={() => setScreen("shops")}>See all shops</button>
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
