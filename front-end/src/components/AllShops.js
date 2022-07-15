import React from 'react';
import Shop from './Shop';

function AllShops({shops, select}) {

  console.log(shops);

  return (
    <>
      <div>
        {shops?.map((shops)=>{
          <div key={shops._id}>
            <Shop shop={shops} select={select}/>
          </div>
        })}
      </div>
    </>
  )
}

export default AllShops