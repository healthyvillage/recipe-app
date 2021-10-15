import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/vegpattern_01.svg"})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
        width: "100%",
        height: "144px",
        marginBottom: "-1em",
        backgroundColor: "#ffc546"
      }}
    >
      <header>
        <p className="logo">Healthy Village</p>
        {/* <p>Find your new favorite recipe in few seconds! Just click on the category names in the left side of the screen.</p> */}
      </header>
    </div>
  );
}

export default Header;
