import React from 'react';

function Footers11(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row align-items-center text-center">
      <div className="col-12 col-lg-4 text-lg-left">
        © 2018 Froala
      </div>

      <div className="col-12 col-lg-4 mt-4 mt-lg-0">
        <img alt="logo" src="./imgs/logo.png" height="40" />
      </div>

      <div className="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
        <ul className="nav justify-content-lg-end justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Privacy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>)
}

export default Footers11
