import React from 'react'
import { useParams } from 'react-router-dom';

function EditShop() {
  const {shopid} = useParams();
  console.log(shopid);
  // console.log(id)
  return (
    <>
      <div>
        <form>
          <input type='text' placeholder=""/>
          <input type='text' placeholder=""/>
          <input type='text' placeholder=""/>
          <input type='text' placeholder=""/>
          <input type='text' placeholder=""/>
          <button type='submit'>Edit</button>
        </form>
      </div>
    </>
  )
}

export default EditShop