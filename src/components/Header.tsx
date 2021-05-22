import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      /*<header className="header">
            <ul className="navigation" >
                <li>
                  <NavLink activeClassName="active" exact  to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to='/apiproducts'>ApiProducts</NavLink>
                  </li>
                <li>
                  <NavLink activeClassName="active" to='/user/:userid'>User</NavLink>
                  </li >
                  <li>
                  <NavLink activeClassName="active" to='/counter'>Counter</NavLink>
                  </li >
                <li>
                  <NavLink activeClassName="active" to='/about'>About</NavLink>
                  </li >
            </ul >
      </header>*/
      <header className="grid-header">
        <div>Portal(Header)</div>
      </header>
    );
  }

export default Header;