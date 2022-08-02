import React from 'react'

function Shop({ shops, switchScreen, select }) {
  console.log(shops);


  return (
    <>
      <div className='box'>
        <div>ShopName: {shops.ShopName}</div>
        <div>Description: {shops.Description}</div>
        <div>Language: {shops.Language}</div>
        <div>Country: {shops.Country}</div>
        <div>Currncy: {shops.Currency}</div>
        <button onClick={() => switchScreen("update shop")}>update Shop</button>
        <button>Delete Shop</button>
      </div>
    </>
  )
}

export default Shop