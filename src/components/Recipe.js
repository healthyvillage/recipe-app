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
}) => {

  // const getUri = (uri) =>
  // uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '');

  return (
    <div className="recipe">
      <img className="image" src={image} alt="" />

      <h1>{title}</h1>

      <div className="labels">
        <p>{Math.round(calories)} Calories</p>
        <p>{ingredients.length}</p>
        <p>{mealType}</p>
        <p>{dietLabels}</p>
      </div>
      <div className="view-recipe">
        <a
          // href={`${getUri(uri)}`}
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
