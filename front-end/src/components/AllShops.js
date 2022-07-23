import React, {useState, useEffect} from 'react';
import Shop from './Shop';


function AllShops() {

  // console.log(shops);
  // const [searchedShopName, setSearchedShopName] = useState('');
  const [allShops, setAllShops] = useState([]);
  // const [shop, setShop] = useState([]);
  // const [selectedShop, setSelectedShop] = useState('');

    // const shopPicked = (shop)=>{
  //   setSelectedShop(shop);
  //   console.log(shop);
  //   console.log(selectedShop);
  // }

  // const clearShop = () =>{
  //   setSelectedShop('');
  // }

  useEffect(()=>{
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
        {/* {shops?.map((shops) => ( */}
          {/* <div key={shops._id}>
            <Shop shops={shops} />
          </div>
        ))} */}
      </div>
    </>
  )
}

export default AllShops