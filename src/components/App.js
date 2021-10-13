import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Course from "./Course";
import Preference from "./Preference";
import Diet from "./Allergens";
import World from "./World";
import Header from "./Header";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`
    );

    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data)
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
      <Header />
      <div className="content">
        <div className="panel-wrap">
          <div className="discover">
            <section className="panel-search">
              <h1>Discover what to cook & eat.</h1>
              <form onSubmit={getSearch} className="search-form">
                <input
                  id="yea"
                  className="search-bar"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                  placeholder="Search Recipe / Ingredients"
                  autocomplete="off"
                />
                <button className="search-button" type="submit">
                  <svg
                    viewBox="0 0 50 50"
                    width="50px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="none" height="50" width="50" />
                    <circle
                      cx="21"
                      cy="20"
                      fill="none"
                      r="16"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <line
                      fill="none"
                      stroke="#000000"
                      stroke-miterlimit="10"
                      stroke-width="4"
                      x1="32.229"
                      x2="45.5"
                      y1="32.229"
                      y2="45.5"
                    />
                  </svg>
                </button>
              </form>
            </section>
            <div className="type_preference">
              <section className="panel-card course">
                <Course setQuery={setQuery} />
              </section>
              <section className="panel-card preference">
                <Preference setQuery={setQuery} />
              </section>
              <section className="panel-card diet">
                <Diet setQuery={setQuery} />
              </section>
              <section className="panel-card world">
                <World setQuery={setQuery} />
              </section>
            </div>
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
              url={recipe.recipe.url}
              id={id}
              cuisineType={recipe.recipe.cuisineType}  
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
