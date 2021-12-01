import React, { Component } from 'react';

class Headers16 extends Component {
  render() {
    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="https://www.froala.com">
        <img src="./imgs/logo.png" height="30" alt="logo" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav11" aria-controls="navbarNav11" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav11">
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

        <a className="btn btn-outline-light ml-md-3" href="https://www.froala.com">Button</a>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers16
