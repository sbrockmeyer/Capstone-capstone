import React, { useState, useEffect } from 'react';
import EditShop from './EditShop';
import Shop from './Shop';


function AllShops({ switchScreen }) {

  const [allShops, setAllShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState('')


  const selectShop = (shop) =>{
    setSelectedShop(shop);
    console.log(shop);
    console.log(selectedShop);
  }

  useEffect(() => {
    getShopData();
  }, []);

  const getShopData = () => {
    var urlShop = `http://localhost:4000/shopapi`;

    fetch(urlShop)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        // setShop(data);
        setAllShops(data);
      }).catch(e => console.log(e));
  }

  return (
    <>
      <div>
        {allShops?.map((allShops) => (
          <div key={allShops._id}>
            {selectedShop?
            <EditShop shop={selectedShop}/>:
            <Shop shops={allShops} switchScreen={switchScreen} select={selectShop}/>
            }
          </div>
        ))}
      </div>
    </>
  )
}

export default AllShops