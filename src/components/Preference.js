/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from "jquery";



const preference = ({ setQuery, setHealth, getRecipes }) => {

  const preferenceVegetarian = (e) => {
    const preferenceID = document.getElementById("vegetarian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID)
    addClass(e);
  }

  // const preferenceVegan = (e) => {
  //   const preferenceID = document.getElementById("vegan").innerText;
  //   setQuery(preferenceID);
  //   console.log(preferenceID)
  //   addClass(e);
  // }

  const preferenceVegan = (e) => {
    const preferenceID = document.getElementById("vegan").id;
    setHealth(preferenceID);
    console.log(preferenceID)
    addClass(e);
    getRecipes();
  }

  const preferenceLowSugar = (e) => {
    const preferenceID = document.getElementById("lowsugar").innerText;
    setQuery(preferenceID);
    console.log(preferenceID)
    addClass(e);
  }

  const preferenceNutFree = (e) => {
    const preferenceID = document.getElementById("nutfree").innerText;
    setQuery(preferenceID);
    console.log(preferenceID)
    addClass(e);
  }

  // const addClass = (event) => event.target.classList.toggle("tag--checked");

  const addClass = () => $(document).on('click', 'ul li a', function () {
    var $el = $(this);
    var $other = $("ul a")
    $other.removeClass('tag--checked');
    $el.addClass("tag--checked");
});

  return (
    <div>
      <h2>By Preferences</h2>
      <ul>
        <li>
          <a
            id="vegetarian"
            className="tag"
            onClick={preferenceVegetarian}
            value="vegetarian"
          >
            Vegetarian
          </a>
        </li>
        <li>
          <a id="vegan" className="tag" onClick={() => preferenceVegan()} value="vegan">
            Vegan
          </a>
        </li>
        <li>
          <a
            id="lowsugar"
            className="tag"
            onClick={preferenceLowSugar}
            value="lowsugar"
          >
            Low Sugar
          </a>
        </li>
        <li>
          <a id="nutfree" className="tag" onClick={preferenceNutFree} value="nutfree">
            Nut Free
          </a>
        </li>
      </ul>
    </div>
  );
};

export default preference;
