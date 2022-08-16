import React from 'react'
import EditShop from './EditShop'
import shopimg from '../images/shop.png'


function Shop({ shops, select }) {
  console.log(shops);


  return (
    <>
      <div className='box' onClick={() => select(shops)}>
      <img src={shopimg} width='80' alt='shopProfile' className='profile' />
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