import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          {/*<img src={require("../../images/logo.svg")} alt="logo" />*/}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Newest
          </NavLink>
          <NavLink to="/" activeStyle>
            Trends
          </NavLink>
          <NavLink to="/" activeStyle>
            Shop
          </NavLink>
          <NavLink to="/" activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/">Search</NavBtnLink>
            <NavBtnLink to="/">User</NavBtnLink>
            <NavBtnLink to="/">Cart</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
