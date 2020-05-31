import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {props.children}
      <footer className="footer">
        <div className="container">
          <div className="content">@footer</div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
