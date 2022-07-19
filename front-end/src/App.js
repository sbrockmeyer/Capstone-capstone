// import './App.css';
import './sass/style.scss';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Dictionary from './components/Dictionary';
import AllShops from './components/AllShops';
import Login from './components/Login';
// import EditUser from './components/EditUser'
import Home from './components/Home';
import ShopDetails from './components/ShopDetails';
import CreateShop from './components/CreateShop';

function App() {

  const [login, setLoggingin] = useState([]);

  const [searchedShopName, setSearchedShopName] = useState('');
  const [allShops, setAllShops] = useState([]);
  const [shop, setShop] = useState([]);
  const [selectedShop, setSelectedShop] = useState('');

  const [words, setTerms] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  const shopPicked = (shop)=>{
    setSelectedShop(shop);
    console.log(shop);
    console.log(selectedShop);
  }

  const clearShop = () =>{
    setSelectedShop('');
  }

  const getShopData = () =>{
    var urlShop = `http://localhost:4000/shopapi`;

    fetch(urlShop)
      .then(resp => resp.json())
      .then(data =>{
        console.log(data);
        setShop(data);
        allShops(data);
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

  // useEffect(()=>{
  //   getWordData();
  //   getShopData();
  // }, []);

  // useEffect(() =>{
  //   console.log(`useeffect words`);
  //   console.log(words);
  // }, [words]);

  return (
    <div className="App">
      <Home/>
      {/* <Dictionary word={words}/> */}
      {/* {
        selectedShop?
        <ShopDetails shop={selectedShop} clear={clearShop}/> :
        <AllShops shops={allShops} select={shopPicked}/> 
      } */}

      <a href='CreateShop.js'>createShop</a>
      {/* <a href='Login.js' >Login</a> / <a href='CreateUser'>SignUp</a> */}
    </div>
  );
}

export default App;
