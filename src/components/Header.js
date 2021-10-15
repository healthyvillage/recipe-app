import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/HealthyFood_07.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
        width: "100%",
        height: "284px",
        marginBottom: "-1em",
      }}
    >
      <header>
        <p className="logo">Healthy Village</p>
      </header>
    </div>
  );
}

export default Header;
