import React,{useState, useEffect} from 'react'
import Word from './Word'

function Dictionary() {

  const [words, setTerms] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  const getWordData = () =>{
    var urlWord = `http://localhost:4000/wordsapi`;

    fetch(urlWord)
      .then(resp => resp.json())
      .then(data =>{
        console.log(data);
        setTerms(data);
      }).catch(e => console.log(e));
  }


  useEffect(()=>{
    getWordData();
  }, []);


  // console.log(word);
  
  return (
    <>
      <div>
        {/* {word?.map((word)=>(
          <div key={word._id}>
            <Word term={word}/> */}
          {/* </div> */}
        {/* ))} */}
      </div>
    </>
  )
}

export default Dictionary