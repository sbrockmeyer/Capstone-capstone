import React, { useEffect } from 'react'
import EditShop from './EditShop';

function Shop({ shops, switchScreen }) {
  console.log(shops);


  return (
    <>
      <div className='box'>
        <div>ShopName: {shops.ShopName}</div>
        <div>Description: {shops.Description}</div>
        <div>Language: {shops.Language}</div>
        <div>Country: {shops.Country}</div>
        <div>Currncy: {shops.Currency}</div>
        <button onClick={() => switchScreen("update shop")}>update Shop <EditShop id={shops._id} /></button>
        <button>Delete Shop</button>
      </div>
    </>
  )
}

export default Shop