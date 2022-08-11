import React from 'react'
import {useParams} from 'react-router-dom';

function WordDetails({ word, clear }) {
	const {wordid} = useParams();
	console.log(wordid);

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
			{/* <button onClick={() => edit()}>edit shop</button> */}
			<a href={"/editWord/" + word._id} className="editbutton">edit word</a>
			<button onClick={() => delet()}>delete word</button>
		</>
	)
}

export default WordDetails