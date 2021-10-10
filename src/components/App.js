import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Recipe from "./Recipe";
import Course from "./Course";
import Preference from "./Preference";
import Diet from "./Diet";
import World from "./World";
import { v1 as uuid } from "uuid";

const App = () => {
  const APP_ID = "ea973b87";
  const APP_KEY = "e1d0d9e817be8f0546891773cdd59989";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [health, setHealth] = useState('paleo');
  
  let id = uuid();

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, health]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=30&health=${health}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  };

  // health=${health}

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="discover">
        {/* <Filter sethealthLabels={sethealthLabels} /> */}
        <form onSubmit={getSearch} className="search-form">
          <input
            id="yea"
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search Recipe"
            
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="type_preference">
          <Course setQuery={setQuery} />
          <Preference setQuery={setQuery} setHealth={setHealth} getRecipes={getRecipes} />
          <Diet setQuery={setQuery} />
          <World setQuery={setQuery} />
        </div>
      </div>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            uri={recipe.recipe.uri}
            url={recipe.recipe.url}
            source={recipe.recipe.source}
            id={id}
            shareAs={recipe.recipe.shareAs}
            mealType={recipe.recipe.mealType}
            dietLabels={recipe.recipe.dietLabels}
            label={recipe.recipe.label}
            
          />
        ))}
      </div>
    </div>
  );
};

export default App;
