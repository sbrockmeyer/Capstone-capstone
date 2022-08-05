import React from 'react'

function EditUser({id}) {
  console.log(id);
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

export default EditUser