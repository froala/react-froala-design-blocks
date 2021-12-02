import React from 'react';

function Headers05(props) {
  return (<header className={`${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="col-4 col-md-2 text-right text-md-center order-lg-6">
        <a href="https://www.froala.com">
          <img src="./imgs/logo.png" height="30" alt="logo" />
        </a>
      </div>

      <div className="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">
        <ul className="navbar-nav col-5">
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

      <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-twitter"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-github"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.froala.com"><i className="fab fa-slack"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</header>)
}

export default Headers05
