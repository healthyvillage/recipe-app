/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from "jquery"

const course = ({setQuery}) => {
    const preferenceBreakfast = (e) => {
        const preferenceID = document.getElementById("breakfast").innerText;
        setQuery(preferenceID);
        console.log(preferenceID)
        addClass(e);
      }
    
      const preferenceLunch = (e) => {
        const preferenceID = document.getElementById("lunch").innerText;
        setQuery(preferenceID);
        console.log(preferenceID)
        addClass(e);
      }
    
      const preferenceDinner = (e) => {
        const preferenceID = document.getElementById("dinner").innerText;
        setQuery(preferenceID);
        console.log(preferenceID)
        addClass(e);
      }
    
      const preferenceSnack = (e) => {
        const preferenceID = document.getElementById("snack").innerText;
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
            <h2>By Course</h2>
          <ul>
            <li>
              <a id="breakfast" className="tag" onClick={preferenceBreakfast} value="breakfast">
                Breakfast
              </a>
            </li>
            <li>
              <a id="lunch" className="tag" onClick={preferenceLunch} value="lunch">
                Lunch
              </a>
            </li>
            <li>
              <a id="dinner" className="tag" onClick={preferenceDinner} value="dinner">
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
    )
}

export default course



