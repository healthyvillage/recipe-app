import React from "react";
  
const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  uri,
  url,
  mealType,
  dietLabels,
  label,
}) => {

  return (
    <div className="recipe">
      <img className="image" src={image} alt="" />

      <h1>{title}</h1>

      <div className="labels">
        <p>{Math.round(calories)} Calories</p>
        <p>{ingredients.length}</p>
        <p>{mealType}</p>
        <p>{dietLabels}</p>
        <p>{label}</p>
        
      </div>
      <div className="view-recipe">
        <a
          href={url}
          className="button-view"
          target="_blanket"
        >
          View recept
        </a>
      </div>
    </div>
  );
};

export default Recipe;
