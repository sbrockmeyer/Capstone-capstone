import React, { useState, useEffect } from 'react';
import EditShop from './EditShop';
import ShopDetails from './ShopDetails'
import Shop from './Shop';


function AllShops() {

  const [allShops, setAllShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState('')


  const selectShop = (shop) => {
    setSelectedShop(shop);
    console.log(shop);
    console.log(selectedShop);
  }

  const clearSelectShop = () =>{
    setSelectedShop('');
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
        {
          selectedShop ?
            <ShopDetails shop={selectedShop} clear={clearSelectShop}/> :
            allShops?.map((allShops) => (
              <div key={allShops._id}>
                {

                  <Shop shops={allShops} select={selectShop} />
                }
              </div>
            ))}
      </div>
    </>
  )
}

export default AllShops