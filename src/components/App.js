import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Course from "./Course";
import Preference from "./Preference";
import Diet from "./Allergens";
import World from "./World";
import Header from "./Header";
import { v1 as uuid } from "uuid";
import Footer from "./Footer";

const App = () => {
  const APP_ID = "ea973b87";
  const APP_KEY = "e1d0d9e817be8f0546891773cdd59989";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(16);

  let id = uuid();

  useEffect(() => {
    getRecipes();
  }, [query, count]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=${count}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };


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
      <div className="content">
        <div className="panel-wrap scrollbar-moz">
          <div className="discover">
            <section
              className="panel-search"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/vegpattern_01.svg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundColor: "#ffc546",
              }}
            >
              <h1>Discover what to cook & eat.</h1>
              <form onSubmit={getSearch} className="search-form">
                <input
                  id="yea"
                  className="search-bar"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                  placeholder="Search Recipe / Ingredients"
                  autoComplete="off"
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
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <line
                      fill="none"
                      stroke="#000000"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                      x1="32.229"
                      x2="45.5"
                      y1="32.229"
                      y2="45.5"
                    />
                  </svg>
                </button>
                <a
                  className="odkaz"
                  href="https://www.vecteezy.com/free-vector/vegetable-pattern"
                  target="_blanket"
                >
                  Vegetable Pattern Vectors by Vecteezy
                </a>
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
            <Footer />
          </div>
        </div>
        <div className="content-wrap scrollbar-moz">
          <Header />

          <div className="container-recipes">
            <div
              className="container-bg"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/vegpattern_03.svg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                width: "100%",
                height: "100vh",
              }}
            >
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
                    totalTime={recipe.recipe.totalTime}
                  />
                ))}
              </div>

              <div className="main-text">
                <p className="load-text">
                  Find your new favorite recipe in few seconds! Just click on
                  the category names in the left side of the screen.
                </p>

                <div className="arrow-left">
                  <svg
                    version="1.1"
                    viewBox="0 0 91 91"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M6.1,50.1c6.3,3.6,12.3,7.5,17.6,12.5c4.9,4.6,7.6,10.4,12,15.3c1.6,1.8,5.6,1.1,5.9-1.6   c1.3-9.7-6.1-18.4-14.7-25.3c18.5,0.4,37,1.4,55.4,2.4c8.4,0.4,8.3-12.6,0-13c-18.5-1-37.1-1.8-55.6-1.3c6.6-7,11.8-15.9,14.1-24.1   c1.1-3.7-3.7-5.1-5.8-2.4c-3.9,5.1-7.6,10.5-12,15.1c-5,5.3-10.8,9-16.9,12.9c-2.2,1.4-2.9,3.4-2.6,5.2C3.4,47.5,4.2,49.1,6.1,50.1   z" />
                    </g>
                  </svg>
                </div>
              </div>

              <button onClick={() => setCount(count + 16)} className="view">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
