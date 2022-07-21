import React from 'react'

function Shop({ shops }) {
  console.log(shops);
  return (
    <>
      <div >
        <div>ShopName: {shops.ShopName}</div>
        <div>Description: {shops.Description}</div>
        <div>Language: {shops.Language}</div>
        <div>Country: {shops.Country}</div>
        <div>Currncy: {shops.Currency}</div>
      </div>
    </>
  )
}

export default Shop