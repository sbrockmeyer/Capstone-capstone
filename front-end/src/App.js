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
  const [words, setTerms] = useState([]);

  const shopPicked = (shop)=>{
    setSelectedShop(shop);
    console.log(shop);
    console.log(selectedShop);
  }

  const getShopData = () =>{
    var urlShop = `http://localhost:4000/shopapi`;

    fetch(urlShop)
      .then(resp => resp.json())
      .then(data =>{
        console.log(data);
        setShop(data);
      }).catch(e => console.log(e));
  }

  const getWordData = () =>{
    var urlWord = `http://localhost:4000/wordsapi`;

    fetch(urlWord)
      .then(resp => resp.json())
      .then(data =>{
        console.log(data);
        setTerms(data);
      }).catch(e => console.log(e));
  }

  useEffect(()=>{
    getWordData();
  }, []);

  useEffect(() =>{
    console.log(`useeffect words`);
    console.log(words);
  }, [words]);

  return (
    <div className="App">
      <Home/>
      <Dictionary word={words}/>
      {/* <a href='Login.js' >Login</a> / <a href='CreateUser'>SignUp</a> */}
    </div>
  );
}

export default App;
