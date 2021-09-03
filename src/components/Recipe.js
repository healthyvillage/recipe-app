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
}) => {
  return (
    <div className="recipe">
      <img className="image" src={image} alt="" />
      <h1>{title}</h1>
      {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.measure}</li>
                ))}
            </ol> */}
      <p>{Math.round(calories)} Calories</p>
      {/* <p>{url})</p> */}
      <a href="{url}" className="button-view" target="_blanket">
        View recept
      </a>
    </div>
  );
};

export default Recipe;
