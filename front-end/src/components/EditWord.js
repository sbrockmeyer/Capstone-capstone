import React from 'react';
import { useParams } from 'react-router-dom';

function EditWord() {

	const id = useParams();

	return (
		<>
			<div>Edit Shop</div>
			<div>{id.shopID}</div>
		</>
	)
}

export default EditWord