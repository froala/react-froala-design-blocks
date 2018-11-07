import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Headers06 extends Component {
  render() {
    return <header>
  <div className="container">
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="https://www.froala.com">
        <img src="./imgs/img_logo.png" height="30" alt="image" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav3">
        <ul className="navbar-nav ml-auto">
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
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>

        <a className="btn btn-outline-primary ml-md-3" href="https://www.froala.com">Button</a>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers06
