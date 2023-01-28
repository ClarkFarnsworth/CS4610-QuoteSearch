import { useState, useEffect, KeyboardEvent } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

interface Quote{
  description: string;
  author: string;
}

function App() {
  const [quotes, setQuote] = useState<Quote>();

  const getQuote = async () => {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    
    return(await result.json());
      
  }
  
  useEffect( () => {
    getQuote();

  }, []);

    
  
  

  return (
    <div>
      <div>
        <h2>
          Quote Search
        </h2>
        <div>
        <input 
        type="text"         
        placeholder="Ken Block"
        />
        <button >
          Search
        </button>
        </div>
        <div>{}
        </div>
      </div>
    </div>
  )
}

export default App
