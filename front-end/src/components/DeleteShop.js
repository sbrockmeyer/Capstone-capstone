import { useParams } from 'react-router-dom';
import React, { useState} from 'react';

function DeleteShop() {
    const {shopid} = useParams();
    console.log(shopid);
    const [message, setMessage] = useState("");

    

    return(
        <>
            <h2>{message ? <h1>{message}</h1> : null}</h2>
        </>
    )
}

export default DeleteShop;