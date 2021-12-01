import React from 'react';

function Headers09(props) {
  return (<header>
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
      <div className="col-2 text-left">
        <a href="https://www.froala.com">
          <img src="./imgs/logo.png" height="30" alt="logo" />
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">
        <ul className="navbar-nav justify-content-center">
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
            <a className="nav-link" href="https://www.froala.com">Contact</a>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Log In <i className="fas fa-sign-in-alt"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>)
}

export default Headers09
