import React from 'react'
import EditShop from './EditShop'

function Shop({ shops, select }) {
  console.log(shops);


  return (
    <>
      <div className='box' onClick={() => select(shops)}>
        <div>ShopName: {shops.ShopName}</div>
        <div>Description: {shops.Description}</div>
        {/* <div>Language: {shops.Language}</div>
        <div>Country: {shops.Country}</div>
        <div>Currency: {shops.Currency}</div> */}
      </div>
    </>
  )
}

export default Shop