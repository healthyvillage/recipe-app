import React from "react";

function Header() {
  return (
    <div className="head-bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/vegpattern_01.svg"})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "100%",
        height: "144px",
        marginBottom: "-1em",
        backgroundColor: "#ffc546"
      }}
    >
      <header>
        <p className="logo">Healthy Village</p>
      </header>
    </div>
  );
}

export default Header;
