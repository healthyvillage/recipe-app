import React from "react";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  uri,
  url,
  source,
  id,
  shareAs,
  mealType,
  dietLabels
}) => {
  return (
    <div className="recipe"> 
      <img className="image" src={image} alt=""/>
      
      
      <h1>{title}</h1>
      {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.measure}</li>
                ))}
            </ol> */}
      <div className="labels">
        <p>{Math.round(calories)} Calories</p>
        <p>{mealType}</p>
        <p>{dietLabels}</p>
      </div>
      <div className="view-recipe">
        <a href="{url}" className="button-view" target="_blanket">
          View recept
        </a>
      </div>
    </div>
  );
};

export default Recipe;
