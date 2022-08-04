import React, { useState, useEffect } from 'react'
import Word from './Word'
import WordDetails from './WordDetails';

function Dictionary() {

  const [words, setTerms] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');
  // const [searchedWord, setSearchedWord] = useState('');


  const selectWord = (word) => {
    setSelectedWord(word);
    console.log(word);
    console.log(selectedWord);
  }

  const clearSelectedWord = () =>{
    setSelectedWord('');
  }

  const getWordData = () => {
    var urlWord = `http://localhost:4000/wordsapi`;

    fetch(urlWord)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setTerms(data);
      }).catch(e => console.log(e));
  }


  useEffect(() => {
    getWordData();
  }, []);


  console.log(words);

  return (
    <>
      <div>
        {selectedWord ?
          <WordDetails word={selectedWord} clear={clearSelectedWord}/> :
          words?.map((words) => (
            <div key={words._id}>
              <Word term={words} select={selectWord} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Dictionary