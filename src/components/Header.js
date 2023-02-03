import React from 'react';
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import AYS from "../assets/AYS.png"

const Header = () => {
  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    </style>
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={AYS}
            alt="Are You Super logo"
            className="ays-logo"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/heroindex" className="nav-link" style={{color:"red"}}>
          Meet the Superheroes
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/heronew" className="nav-link" style={{color:"red"}}>
          Add a New Superhero
        </NavLink>
      </NavItem>
    </Nav>
    </>
  );
}

export default Header;