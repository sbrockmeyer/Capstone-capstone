import React from 'react';
import Shop from './Shop';

function AllShops({ shops }) {

  console.log(shops);

  return (
    <>
      <div>
        {shops?.map((shops) =>(
          <div key={shops._id}>
            <Shop shops={shops} />
          </div>
        ))}
      </div>
    </>
  )
}

export default AllShops