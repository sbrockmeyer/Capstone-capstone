import React from 'react'
import EditShop from './EditShop'

function ShopDetails({ shop, clear }) {
  console.log(shop);

  const edit = () => {
    console.log(`Edit ${shop._id}`);
  }

  const delet = () => {
    console.log(`Delete ${shop._id}`)
  }
  return (
    <>
      <div className='boxdetails' onClick={() => clear()}>
        <div>ID: {shop._id}</div>
        <div>Name: {shop.ShopName}</div>
        <div>Language: {shop.Language}</div>
        <div>Country: {shop.Country}</div>
        <div>Currency: {shop.Currency}</div>
        <div>Description: {shop.Description}</div>
      </div>
      <button onClick={() => edit()}>edit shop</button>
      <button onClick={() => delet()}>delete shop</button>
    </>
  )
}

export default ShopDetails