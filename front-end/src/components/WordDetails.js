import React from 'react'

function WordDetails({ word, clear }) {
	return (
		<>
			<div className='box' onClick={() => clear()}>
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
		</>
	)
}

export default WordDetails