import React from 'react';
import CopyRight from "../components/copyright.jsx";

function Footers02(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-md-8">
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

      <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
        <CopyRight />
      </div>
    </div>
  </div>
</footer>)
}

export default Footers02
