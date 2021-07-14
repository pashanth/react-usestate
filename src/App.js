//import { func } from "prop-types";
import React, { useState } from "react";

function App() {
  const [count,setcount]=useState(4);
  const [theme,settheme]=useState('blue');

  function decrementcount(){
    setcount(prevcount=>prevcount-1)
  }

  function incrementcount(){
    setcount(prevcount=>prevcount+1)
    settheme('red')
  }

  return (    
    <div>
      <button onClick={decrementcount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementcount}>+</button>
    </div>
  );
}

export default App;
