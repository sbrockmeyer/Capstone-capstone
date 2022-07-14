import React from 'react'
import Word from './Word'

function Dictionary({word}) {
  console.log(word);
  return (
    <>
      <div>
        {word?.map((word)=>(
          <div key={word._id}>
            <Word term={word}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dictionary