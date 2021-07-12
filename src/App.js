import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const APP_ID = '';
  const APP_KEY = '';
  

 
  useEffect( () =>{
    getRecipes()
  },[])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
