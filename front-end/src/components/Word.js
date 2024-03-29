import React from 'react';
import EditWord from './EditWord';

function Word({ term, select}) {
  console.log(term);
  return (
    <>
    <div >
      <div className='box' onClick={() => select(term)}>
        <div>English: {term.English}</div>
        <div>UK/Australia: {term.UK} </div>
        {/* <div>German: {term.German}</div>
        <div>Swedish: {term.Swedish}</div>
        <div>Spanish: {term.Spanish}</div>
        <div>Italian: {term.Italian}</div>
        <div>French: {term.French}</div>
        <div>Polish: {term.Polish}</div> */}
        {/* <div>Definition: {term.Definition}</div> */}
        {/* <button onClick={() => switchScreen("update word")}>update word <EditWord id={term._id}/></button> */}
      </div>
    </div>
    </>
  )
}

export default Word