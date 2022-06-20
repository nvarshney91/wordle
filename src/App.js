import './App.css';
import Key from './Components/Key';
import { useEffect, useState} from 'react';
import axios from 'axios';
import Wordle from './Components/Wordle';
function App() {
  const [solution,setSolution]=useState([])
  useEffect(()=> {
    const link_word=`https://random-word-api.herokuapp.com/word?length=5`;
    async function fetchData(){
        try{
          const response =await axios.get(link_word)
          setSolution(response.data);
        }catch(error){
          console.log("!! Sorry, You are not connected to Internet !!")
        }
    }
    fetchData();
},[])
  return (
    <div>
      <h1>Solution is: {solution}</h1>
      {solution && <Wordle solution={solution}/>}
      <Key/>
    </div>
  );
}

export default App;
