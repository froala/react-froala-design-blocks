import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Headers18 extends Component {
  render() {
    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="https://www.froala.com">
        <img src="./imgs/img_logo.png" height="30" alt="image" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav13">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.froala.com">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Team</a>
          </li>
        </ul>

        <ul className="navbar-nav justify-content-end ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Docs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Log In</a>
          </li>
        </ul>

        <a className="btn btn-light ml-md-3" href="https://www.froala.com">Button</a>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers18
