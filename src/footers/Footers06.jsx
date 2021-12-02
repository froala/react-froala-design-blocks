import React from 'react';
import CopyRight from "../components/copyright.jsx";

function Footers06(props) {
  return (<footer className={`fdb-block footer-small  ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="https://www.froala.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Privacy Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>

        <CopyRight />
      </div>
    </div>
  </div>
</footer>)
}

export default Footers06
