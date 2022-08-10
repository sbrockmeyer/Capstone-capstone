import React from 'react'
import { useParams } from 'react-router-dom';

function EditShop() {
  const {id} = useParams();
  console.log(id);
  // console.log(id)
  return (
    <>
      <div>
        <form>
          <input type='text' placeholder={id}/><br/><br/>
          <input type='text' placeholder=""/><br/><br/>
          <input type='text' placeholder=""/><br/><br/>
          <input type='text' placeholder=""/><br/><br/>
          <input type='text' placeholder=""/><br/><br/>
          <button type='submit'>Edit</button>
        </form>
      </div>
    </>
  )
}

export default EditShop