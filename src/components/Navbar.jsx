import React from "react";
import logo from "../assets/logo.svg";
const Navbar = (props) => {
  const navbarOption = [
    {
      icon: "person_outline",
      label: "Sign In",
    },
    {
      icon: "shopping_bag",
      label: "Cart",
    },
    {
      icon: "support",
      label: "Help",
    },
    {
      icon: "search",
      label: "Search",
    },
  ];
  return (
    <section className="navbar">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="location">
          <span className="city">{props.city}</span>
          <span className="state">
            {props.state},{props.country}
          </span>
        </div>
        <div className="navbar-options">
          {navbarOption.map((option) => {
            return (
              <div className="navbar-option" key={option.icon}>
                <span className="material-icons">{option.icon}</span>
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
