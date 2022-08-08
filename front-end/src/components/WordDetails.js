import React from 'react'

function WordDetails({ word, clear }) {
	const edit = () => {
		console.log(`Edit ${word._id}`);
	}

	const delet = () => {
		console.log(`Delete ${word._id}`)
	}
	return (
		<>
			<div className='boxdetails' onClick={() => clear()}>
				<div>English: {word.English}</div>
				<div>UK/Australia: {word.UK} </div>
				<div>German: {word.German}</div>
				<div>Swedish: {word.Swedish}</div>
				<div>Spanish: {word.Spanish}</div>
				<div>Italian: {word.Italian}</div>
				<div>French: {word.French}</div>
				<div>Polish: {word.Polish}</div>
				<div>Definition: {word.Definition}</div>
			</div>
			<button onClick={() => edit()}>edit shop</button>
			<button onClick={() => delet()}>delete shop</button>
		</>
	)
}

export default WordDetails