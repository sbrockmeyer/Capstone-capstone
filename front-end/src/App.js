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

function App() {

  // const [login, setLoggingin] = useState([]);

  

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
