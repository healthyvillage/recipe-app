import React from "react";

const Recipe = ({ title, calories, image, ingredients, url, cuisineType }) => {
  function handleSubmit() {}

  return (
    <div className="recipe" onClick={handleSubmit}>
      <a href={url} className="button-view" target="_blanket">
        <img className="image" src={image} alt="img" />

        <h2>{title}</h2>

        <div className="labels">
          <p>{Math.round(calories)} Calories</p>
          <p>{ingredients.length} Ingredients</p>
        </div>
      </a>
      {/* <div className="view-recipe">
        <a
          href={url}
          className="button-view"
          target="_blanket"
        >
          View recept
        </a>
      </div> */}
    </div>
  );
};

export default Recipe;
