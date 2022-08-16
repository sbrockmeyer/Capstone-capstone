import React from 'react'
// import EditShop from './EditShop'
import { useParams } from 'react-router-dom';
import shopimg from '../images/shop.png'

function ShopDetails({ shop, clear }) {
  const { shopid } = useParams();
  console.log(shop);
  console.log(shopid);

  return (
    <>
      <div className='details'>
        <div className='boxdetails' onClick={() => clear()}>
          {/* <div>ID: {shop._id}</div> */}
          {/* <img src={profile} width='80' alt='profile' className='profile' /> */}

          <img src={shopimg} width='80' alt='shopProfile' className='profile' />
          <div className='detaildetail'>
            <div>Name: {shop.ShopName}</div>
            <div>Language: {shop.Language}</div>
            <div>Country: {shop.Country}</div>
            {/* <div>Currency: {shop.Currency}</div> */}
            <div>Description: {shop.Description}</div>

          </div>
        </div>
        {/* <button onClick={() => edit()}>edit shop</button> */}
        {/* <Link className='editbutton' to='/EditShop' param={{id:shop._id}}>edit Shop</Link> */}
        <a href={"/editShop/" + shop._id} className="editbutton">edit Shop</a> <br />
        <a href={'/shopDetails/deleteShop/' + shop._id} className="editbutton">delete shop</a>
      </div>
    </>
  )
}

export default ShopDetails