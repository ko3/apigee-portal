import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <div className="grid-menu">
        <div>
          <NavLink activeClassName="active" exact  to='/'>Home</NavLink>
          </div>
          <div>
          <NavLink activeClassName="active" to='/apiproducts'>ApiProducts</NavLink>
          </div>
          <div>
          <NavLink activeClassName="active" to='/user/:userid'>User</NavLink>
          </div>
          <div>
          <NavLink activeClassName="active" to='/counter'>Counter</NavLink>
          </div>
          <div>
          <NavLink activeClassName="active" to='/about'>About</NavLink>
          </div>
        </div>
    );
  }

export default Menu;

{/*<ul>
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
        </ul >*/}