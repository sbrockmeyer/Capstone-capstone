import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from "./components/Home";
import Dictionary from './components/Dictionary';
import Login from './components/Login';
import AllShops from './components/AllShops';
import AllUsers from './components/AllUsers';
import EditShop from './components/EditShop';
import CreateShop from './components/CreateShop';
import CreateWord from './components/CreateWord';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import EditWord from './components/EditWord';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/editWord:wordid' element={<EditWord/>}/>
        <Route path='/createWord' element={<CreateWord/>}/>
        <Route path='/createUser' element={<CreateUser/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/createShop' element={<CreateShop/>}/>
        <Route path='/allShops' element={<AllShops />}/>
        <Route path='/editShop:shopid' element={<EditShop />} />
        {/* <Route path='/shop/:userId' element={<ShopDetails/>}/> */}
        <Route path='/allUsers' element={<AllUsers />} />
        <Route path='/editUser:userid' element={<EditUser/>}/>
        <Route path='*' element={<h1>404 this page doesnt exist</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
