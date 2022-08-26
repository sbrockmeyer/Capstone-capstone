import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

function EditShop() {
  const {shopid} = useParams();
  console.log(shopid);

  const [shopName, setShopName] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [message, setMessage] = useState('');

  let handleSubmit = async (e) =>{
    e.preventDefault();
    try{

      let res = await fetch(`http://localhost:4000/updateShop`,{
        method: "POST",
        headers:{
          'Content-Type' : "application/json",
        },
        body: JSON.stringify({
          Id: shopid,
          shopName: shopName,
          description: description,
          language: lang,
          country: country,
          currency: currency,
        }),
      });

      if(res.status === 200){
        setShopName("");
        setDescription("");
        setLanguage("");
        setCountry("");
        setCurrency("");
        setMessage("your shop has been updated");
      }else{
        setMessage("nothing happened");
      }

    }catch(err){
      console.log(err);
    }
  }



  return (
    <>
      <div className='formbox'>
        <form onSubmit={handleSubmit} className='formyform'>
          {/* <div>Shop id: {shopid}</div><br/> */}
          <label>Shop Name:</label><br/>
          <input type='text' value={shopName} placeholder="shop name" onChange={(e) =>setShopName(e.target.value)}/><br/><br/>
          <label>Description:</label><br/>
          <input type='text' value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)}/><br/><br/>
          <label>Language</label><br/>
          <input type='text' value={lang} placeholder="language" onChange={(e) => setLanguage(e.target.value)}/><br/><br/>
          <label>Country</label><br/>
          <input type='text' value={country} placeholder="country" onChange={(e) => setCountry(e.target.value)}/><br/><br/>
          <label>Currency</label><br/>
          <input type='text' value={currency} placeholder="currency" onChange={(e) => setCurrency(e.target.value)}/><br/><br/>
          <button type='submit'>Edit</button>
          <div>{message ? <p>{message} </p> : null}</div>
        </form>
      </div>
    </>
  )
}

export default EditShop