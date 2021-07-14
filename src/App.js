import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/recipe';
import axios from 'axios';

function App() {
  const APP_ID = '';
  const APP_KEY = '';
  
  const[recipes, setRecipes] = useState([])
 
  useEffect( () =>{
    getRecipes()
  },[])

  const getRecipes = async () => {
    /* 
     using fetch:
    const response = await fetch(`https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setRecipes(data.hits) 
    
    using axios:
    */
   axios.get(`https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => {
     console.log(response.data)
     setRecipes(response.data.hits)
   })
  }

  return (
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
