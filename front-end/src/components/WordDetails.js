import React from 'react'
import {useParams} from 'react-router-dom';

function WordDetails({ word, clear }) {
	const {wordid} = useParams();
	console.log(wordid);

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
			<a href={"/editWord/" + word._id} className="editbutton">edit word</a><br/>
			<a href={'/wordDetails/deleteWord/' + word._id} className="editbutton">delete word</a>
		</>
	)
}

export default WordDetails