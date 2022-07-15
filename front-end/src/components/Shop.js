import React from 'react'

function Shop({shop, select}) {
  console.log(shop);
  return (
    <>
    <div onClick={() => select(shop)}>
      
    </div>
    </>
  )
}

export default Shop