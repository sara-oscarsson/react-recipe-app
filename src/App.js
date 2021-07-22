import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/recipe';
import axios from 'axios';

function App() {
  const APP_ID = '';
  const APP_KEY = '';
  
  const[recipes, setRecipes] = useState([])
  const[search, setSearch] = useState("")
  const[query, setQuery] = useState("salad")
 
  useEffect( () =>{
    getRecipes()
  },[query])

  const getRecipes = async () => {
    /* 
     using fetch:
    const response = await fetch(`https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setRecipes(data.hits) 
    
    using axios:
    */
   axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => {
     console.log(response.data)
     setRecipes(response.data.hits)
   })
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input value={search} type="text" onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
