import React from "react";
import { NavLink } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="layout-content">{props.children}</div>
      <footer className="footer">
        <div className="container">
          <div className="content">footer</div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
