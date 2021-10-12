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
      <div className='title_type'>
        <svg viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><path d="M256,48c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.2,0C140.8,48.3,48,141.3,48,256c0,114.7,92.8,207.7,207.5,208  c0.1,0,0.2,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M264.3,172.5  c22.1-0.6,43.5-3.5,64.2-8.5c6.2,24.5,10.1,52.8,10.7,83.8h-74.9V172.5z M264.3,155.8V66c22.4,6.2,45.2,36.1,59.6,82  C304.7,152.6,284.8,155.2,264.3,155.8z M247.7,65.8v90.1c-20.7-0.6-40.8-3.3-60.1-8C202.2,101.7,225.1,71.6,247.7,65.8z   M247.7,172.5v75.2h-75.4c0.6-31,4.5-59.3,10.7-83.8C203.8,168.9,225.5,171.9,247.7,172.5z M155.5,247.7H64.9  c1.8-42.8,17.8-82,43.3-113c18.5,10.2,38.2,18.6,58.8,24.8C160.2,186,156.2,215.9,155.5,247.7z M155.5,264.3  c0.6,31.7,4.6,61.7,11.4,88.2c-20.6,6.3-40.2,14.6-58.8,24.8c-25.5-31-41.4-70.2-43.3-113H155.5z M172.3,264.3h75.4v75.1  c-22.2,0.6-43.9,3.6-64.7,8.7C176.8,323.6,172.9,295.3,172.3,264.3z M247.7,356.1v90.2c-22.6-5.9-45.5-35.9-60.1-82.1  C206.9,359.4,227,356.7,247.7,356.1z M264.3,446v-90c20.5,0.6,40.4,3.3,59.7,7.9C309.5,409.9,286.8,439.8,264.3,446z M264.3,339.4  v-75.1h74.9c-0.6,30.9-4.5,59.2-10.7,83.7C307.8,343,286.4,340,264.3,339.4z M355.9,264.3h91.2c-1.8,42.8-17.8,81.9-43.3,113  c-18.7-10.3-38.5-18.7-59.3-25C351.3,325.8,355.3,296,355.9,264.3z M355.9,247.7c-0.6-31.7-4.6-61.6-11.3-88.1  c20.8-6.3,40.6-14.7,59.2-24.9c25.5,31,41.5,70.2,43.3,113.1H355.9z M392.4,121.9c-16.6,8.8-34,16.1-52.3,21.6  c-9.7-31.3-23.4-56.8-39.5-73.6C336,78.4,367.6,96.8,392.4,121.9z M210.8,70.1c-16.1,16.7-29.7,42.2-39.3,73.3  c-18.1-5.5-35.4-12.7-51.8-21.5C144.2,96.9,175.6,78.6,210.8,70.1z M119.6,390c16.4-8.8,33.8-16,51.8-21.5  c9.7,31.2,23.3,56.6,39.4,73.4C175.6,433.4,144.2,415.1,119.6,390z M300.6,442.1c16.2-16.8,29.8-42.3,39.6-73.7  c18.3,5.5,35.7,12.8,52.3,21.6C367.7,415.2,336,433.6,300.6,442.1z"/></svg>          <h2>World</h2>
      </div>
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
