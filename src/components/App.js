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
                placeholder="Search Recipe"
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </section>
          {/* <section className="discover-content"> */}
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
          {/* </section> */}
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
    </div>
  );
};

export default App;
