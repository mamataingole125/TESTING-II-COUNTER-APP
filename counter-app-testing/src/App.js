import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0)
  return (
    <div className="App">
      <h1>Count :{counter}</h1>
      <Button  
      handleInc={()=>setCounter(counter+5)}
      handleDec={()=>setCounter(counter-5)}
      />
    </div>
  );
}

export default App;
