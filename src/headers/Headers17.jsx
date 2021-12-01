import React from 'react';

function Headers17(props) {
  return (<header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
      <div className="col-2 text-left">
        <a href="https://www.froala.com">
          <img src="./imgs/logo.png" height="30" alt="logo" />
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12">
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
        </ul>
      </div>

      <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
        <li className="nav-item active">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-facebook"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-twitter"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-github"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-google"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</header>)
}

export default Headers17
