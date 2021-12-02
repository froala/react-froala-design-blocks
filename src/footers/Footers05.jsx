import React from 'react';
import Social from "../components/social.jsx"

function Footers05(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-md-6">
        <ul className="nav justify-content-center justify-content-md-start">
          <li className="nav-item">
            <a className="nav-link active" href="https://www.froala.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>
      </div>

      <Social />
    </div>
  </div>
</footer>)
}

export default Footers05
