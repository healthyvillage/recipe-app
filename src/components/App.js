import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Course from "./Course"
import { v1 as uuid } from "uuid";

const App = () => {
  const APP_ID = "ea973b87";
  const APP_KEY = "e1d0d9e817be8f0546891773cdd59989";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  let id = uuid();

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // const preferenceBreakfast = (e) => {
  //   // const addClass = document.getElementById("breakfast")
  //   // addClass.className += " tag--checked";
  //   const preferenceID = document.getElementById("breakfast").innerText;
  //   setQuery(preferenceID);
  //   console.log(preferenceID)
  //   addClass(e);
  // }

  // const preferenceLunch = (e) => {
  //   const preferenceID = document.getElementById("lunch").innerText;
  //   setQuery(preferenceID);
  //   console.log(preferenceID)
  //   addClass(e);
  // }

  // const preferenceDinner = (e) => {
  //   const preferenceID = document.getElementById("dinner").innerText;
  //   setQuery(preferenceID);
  //   console.log(preferenceID)
  //   addClass(e);
  // }

  // const preferenceSnack = (e) => {
  //   const preferenceID = document.getElementById("snack").innerText;
  //   setQuery(preferenceID);
  //   console.log(preferenceID)
  //   addClass(e);
  // }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // const addClass = (event) => event.target.classList.toggle("tag--checked");

  return (
    <div className="App">
      <div className="discover">
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
          {/* <h2>By Course</h2>
          <ul>
            <li>
              <a id="breakfast" className="tag" onClick={preferenceBreakfast} value="breakfast">
                Breakfast
              </a>
            </li>
            <li>
              <a id="lunch" className="tag" onClick={preferenceLunch} value="lunch">
                Lunch
              </a>
            </li>
            <li>
              <a id="dinner" className="tag" onClick={preferenceDinner} value="dinner">
                Dinner
              </a>
            </li>
            <li>
              <a id="snack" className="tag" onClick={preferenceSnack} value="snack">
                Snack
              </a>
            </li>
          </ul> */}
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
          />
        ))}
      </div>
    </div>
  );
};

export default App;
