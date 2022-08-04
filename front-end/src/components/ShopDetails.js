import React from 'react'
import EditShop from './EditShop'

function ShopDetails({ shop,clear }) {
  console.log(shop);
  return (
    <>
      <div className='box' onClick={() => clear()}>
        <div>Name: {shop.ShopName}</div>
        <div>Language: {shop.Language}</div>
        <div>Country: {shop.Country}</div>
        <div>Currency: {shop.Currency}</div>
        <div>Description: {shop.Description}</div>
      </div>
    </>
  )
}

export default ShopDetails