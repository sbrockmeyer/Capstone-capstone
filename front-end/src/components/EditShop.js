import React from 'react'
import {useParams} from 'react-router-dom';

function EditShop() {
  const params = useParams();
  console.log(params);
  // console.log(id)
  return (
    <div>
      hello welcome to edit shop
    </div>
  )
}

export default EditShop