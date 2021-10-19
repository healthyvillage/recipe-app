import React from "react";
import $ from "jquery";

const course = ({ setQuery }) => {
  const preferenceBreakfast = (e) => {
    const preferenceID = document.getElementById("breakfast").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
    visibility(e)
  };

  const preferenceLunch = (e) => {
    const preferenceID = document.getElementById("lunch").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
    visibility(e)
  };

  const preferenceDinner = (e) => {
    const preferenceID = document.getElementById("dinner").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
    visibility(e)
  };

  const preferenceSnack = (e) => {
    const preferenceID = document.getElementById("snack").innerText;
    setQuery(preferenceID);
    console.log(preferenceID);
    addClass(e);
    visibility(e)
  };

  const addClass = () =>
    $(document).on("click", "ul li a", function () {
      var $el = $(this);
      var $other = $("ul a");
      $other.removeClass("tag--checked");
      $el.addClass("tag--checked");
    });

  const visibility = () => {
    $(document).on("click", "ul li a", function () {
      var $show = $(".view");
      var $hideText = $(".main-text");
      var $hideBg = $(".container-bg");  
      $show.addClass("view-active");
      $hideText.addClass("text-hidden");
      $hideBg.addClass("bg-hidden");
    });
  }

  return (
    <div>
      <div className="title_type">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g id="On_time">
            <path d="M342.3926,132.5781a7.9979,7.9979,0,0,0-8,8V256a7.9979,7.9979,0,0,0,8,8h69.875a8,8,0,0,0,0-16h-61.875V140.5781A7.998,7.998,0,0,0,342.3926,132.5781Z" />
            <path d="M62.8613,288.5H189.85a8,8,0,0,0,0-16H62.8613a8,8,0,0,0,0,16Z" />
            <path d="M110.5957,239.4922H189.85a8,8,0,0,0,0-16H110.5957a8,8,0,0,0,0,16Z" />
            <path d="M342.3926,93.5234a162.4086,162.4086,0,0,0-140.4785,80.9688H158.3262a8,8,0,0,0,0,16h48.1679a7.7451,7.7451,0,0,0,2.2325-.4512c.0478-.0137.0957-.0137.143-.0293a7.7257,7.7257,0,0,0,2.2749-1.1836c.1768-.125.3614-.2168.5284-.3554a7.8461,7.8461,0,0,0,1.3222-1.5743,7.6391,7.6391,0,0,0,.5967-.7109,146.4885,146.4885,0,0,1,128.8008-76.6641c80.7656,0,146.4765,65.711,146.4765,146.4766S423.1582,402.4766,342.3926,402.4766a146.4636,146.4636,0,0,1-128.8672-76.7891,7.5334,7.5334,0,0,0-.69-.8262,7.8336,7.8336,0,0,0-1.0669-1.2754,7.7066,7.7066,0,0,0-1.2261-.8261,5.6159,5.6159,0,0,0-2.9487-1.0371A7.4811,7.4811,0,0,0,206.49,321.5H15.1309a8,8,0,1,0,0,16H201.9126a162.3877,162.3877,0,0,0,140.48,80.9766c89.59,0,162.4765-72.8828,162.4765-162.4766S431.9824,93.5234,342.3926,93.5234Z" />
          </g>
        </svg>
        <p className="panel-title">By Course</p>
      </div>
      <ul>
        <li>
          <a
            id="breakfast"
            className="tag"
            onClick={preferenceBreakfast}
            value="breakfast"
          >
            Breakfast
          </a>
        </li>
        <li>
          <a id="lunch" className="tag" onClick={preferenceLunch} value="lunch">
            Lunch
          </a>
        </li>
        <li>
          <a
            id="dinner"
            className="tag"
            onClick={preferenceDinner}
            value="dinner"
          >
            Dinner
          </a>
        </li>
        <li>
          <a id="snack" className="tag" onClick={preferenceSnack} value="snack">
            Snack
          </a>
        </li>
      </ul>
    </div>
  );
};

export default course;
