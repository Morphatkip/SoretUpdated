import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand ml-auto" href="google.com">
            Soret
          </a>
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item m">
              <a className="nav-link" href="google.com">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => {}} className="nav-link" href="google.com">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
