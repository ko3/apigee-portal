import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="menu-el-active" to='/'>
              <span className="link-text">Home</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="menu-el-active" to='/apiproducts'>
              <span className="link-text">ApiProducts</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="menu-el-active" to='/user/:userid'>
              <span className="link-text">User</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="menu-el-active" to='/counter'>
              <span className="link-text">Counter</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="menu-el-active" to='/about'>
              <span className="link-text">About</span>
            </NavLink>
          </li>
        </ul>
    </nav>
      
    );
  }

export default Menu;

/*<aside className="col-2">
        <div className="row">
          <NavLink exact activeClassName="menu-el-active" to='/'>Home</NavLink>
        </div>
        <div className="row">
          <NavLink activeClassName="menu-el-active" to='/apiproducts'>ApiProducts</NavLink>
        </div>
        <div className="row">
          <NavLink activeClassName="menu-el-active" to='/user/:userid'>User</NavLink>
        </div>
        <div className="row">
          <NavLink activeClassName="menu-el-active" to='/counter'>Counter</NavLink>
        </div>
        <div className="row">
          <NavLink activeClassName="menu-el-active" to='/about'>About</NavLink>
        </div>
    </aside>*/