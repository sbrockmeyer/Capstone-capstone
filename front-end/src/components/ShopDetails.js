import React from 'react'
// import EditShop from './EditShop'
import {useParams} from 'react-router-dom';

function ShopDetails({ shop, clear }) {
  const {shopid} = useParams();
  console.log(shop);
  console.log(shopid);

  const delet = () => {
    console.log(`Delete ${shop._id}`)
  }
  return (
    <>
      <div className='boxdetails' onClick={() => clear()}>
        {/* <div>ID: {shop._id}</div> */}
        <div>Name: {shop.ShopName}</div>
        <div>Language: {shop.Language}</div>
        <div>Country: {shop.Country}</div>
        {/* <div>Currency: {shop.Currency}</div> */}
        <div>Description: {shop.Description}</div>
      </div>
      {/* <button onClick={() => edit()}>edit shop</button> */}
      {/* <Link className='editbutton' to='/EditShop' param={{id:shop._id}}>edit Shop</Link> */}
      <a href={"/editShop/" + shop._id} className="editbutton">edit Shop</a> <br/>
      <a href={'/shopDetails/deleteShop/' + shop._id} className="editbutton">delete shop</a>
    </>
  )
}

export default ShopDetails