/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from "jquery"

const diet = ({ setQuery }) => {
    const preferenceBalanced = (e) => {
      const preferenceID = document.getElementById("balanced").innerText;
      setQuery(preferenceID);
      console.log(preferenceID)
      addClass(e);
    }
  
    const preferenceHighProtein = (e) => {
      const preferenceID = document.getElementById("high-protein").innerText;
      setQuery(preferenceID);
      console.log(preferenceID)
      addClass(e);
    }
  
    const preferenceLowCarb = (e) => {
      const preferenceID = document.getElementById("lowcarb").innerText;
      setQuery(preferenceID);
      console.log(preferenceID)
      addClass(e);
    }
  
    const preferenceLowFat = (e) => {
      const preferenceID = document.getElementById("lowfat").innerText;
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
        <h2>By Diet</h2>
        <ul>
          <li>
            <a
              id="balanced"
              className="tag"
              onClick={preferenceBalanced}
              value="balanced"
            >
              Balanced
            </a>
          </li>
          <li>
            <a id="high-protein" className="tag" onClick={preferenceHighProtein} value="high-protein">
            High-Protein
            </a>
          </li>
          <li>
            <a
              id="lowcarb"
              className="tag"
              onClick={preferenceLowCarb}
              value="lowcarb"
            >
              Low-Carb
            </a>
          </li>
          <li>
            <a id="lowfat" className="tag" onClick={preferenceLowFat} value="lowfat">
              Low-Fat
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default diet;