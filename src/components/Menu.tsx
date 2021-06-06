import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <div className="grid-menu">
        <div className="menu-el">
          <NavLink exact activeClassName="menu-el-active" to='/'>Home</NavLink>
        </div>
        <div className="menu-el">
          <NavLink activeClassName="menu-el-active" to='/apiproducts'>ApiProducts</NavLink>
        </div>
        <div className="menu-el">
          <NavLink activeClassName="menu-el-active" to='/user/:userid'>User</NavLink>
        </div>
        <div className="menu-el">
          <NavLink activeClassName="menu-el-active" to='/counter'>Counter</NavLink>
        </div>
        <div className="menu-el">
          <NavLink activeClassName="menu-el-active" to='/about'>About</NavLink>
        </div>
      </div>
    );
  }

export default Menu;