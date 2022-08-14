import { useParams } from 'react-router-dom';
import React, { useState} from 'react';

function DeleteWord() {
    const {wordid} = useParams();
    console.log(wordid);
    const [message, setMessage] = useState("");

    

    return(
        <>
            <h2>{message ? <h1>{message}</h1> : null}</h2>
        </>
    )
}

export default DeleteWord