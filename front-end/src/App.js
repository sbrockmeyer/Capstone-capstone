// import './App.css';
import './sass/style.scss';
import { useState, useEffect } from 'react';
import Dictionary from './components/Dictionary';
import AllShops from './components/AllShops';
import Login from './components/Login';
import EditUser from './components/EditUser'
import Home from './components/Home';

function App() {

  const [login, setLoggingin] = useState([]);
  const [searchedShop, setSearchedShop] = useState('');
  const [shop, setShop] = useState([]);
  const [selectedShop, setSelectedShop] = useState([]);

  const shopPicked = (shop)=>{
    setSelectedShop(shop);
    console.log(shop);
    console.log(selectedShop);
  }

  return (
    <div className="App">
      <Home/>
      <a href='Login.js' >Login</a> / <a href='CreateUser'>SignUp</a>
    </div>
  );
}

export default App;
