/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from 'jquery'; 

const world = ({ setQuery }) => {
  const preferenceAmerican = (e) => {
    const preferenceID = document.getElementById("american").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceAsian = (e) => {
    const preferenceID = document.getElementById("asian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceFrench = (e) => {
    const preferenceID = document.getElementById("french").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceHungarian = (e) => {
    const preferenceID = document.getElementById("hungarian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceIndian = (e) => {
    const preferenceID = document.getElementById("indian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceItalian = (e) => {
    const preferenceID = document.getElementById("italian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferenceMexican = (e) => {
    const preferenceID = document.getElementById("mexican").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

  const preferencePersian = (e) => {
    const preferenceID = document.getElementById("persian").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
  };

//   const addClass = (event) => event.target.classList.toggle("tag--checked");

const addClass = () => $(document).on('click', 'ul li a', function () {
    var $el = $(this);
    var $other = $("ul a")
    $other.removeClass('tag--checked');
    $el.addClass("tag--checked");
});

  return (
    <div>
      <h2>World</h2>
      <ul>
        <li>
          <a
            id="american"
            className="tag"
            onClick={preferenceAmerican}
            value="american"
          >
            American
          </a>
        </li>
        <li>
          <a id="asian" className="tag" onClick={preferenceAsian} value="asian">
            Asian
          </a>
        </li>
        <li>
          <a
            id="french"
            className="tag"
            onClick={preferenceFrench}
            value="french"
          >
            French
          </a>
        </li>
        <li>
          <a
            id="hungarian"
            className="tag"
            onClick={preferenceHungarian}
            value="hungarian"
          >
            Hungarian
          </a>
        </li>
        <li>
          <a
            id="indian"
            className="tag"
            onClick={preferenceIndian}
            value="indian"
          >
            Indian
          </a>
        </li>
        <li>
          <a
            id="italian"
            className="tag"
            onClick={preferenceItalian}
            value="italian"
          >
            Italian
          </a>
        </li>
        <li>
          <a
            id="mexican"
            className="tag"
            onClick={preferenceMexican}
            value="mexican"
          >
            Mexican
          </a>
        </li>
        <li>
          <a
            id="persian"
            className="tag"
            onClick={preferencePersian}
            value="persian"
          >
            Persian
          </a>
        </li>
      </ul>
    </div>
  );
};

export default world;
