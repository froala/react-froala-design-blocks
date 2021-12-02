import React from 'react';
import BlockCopyRight from "../components/blockcopyright.jsx";
import BlockSocial from "../components/blocksocial.jsx";

function Footers07(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-12 col-lg-2 text-lg-left">
        <img alt="logo" src="./imgs/logo.png" height="40" />
      </div>

      <div className="col mt-4 mt-lg-0 text-center">
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
      </div>
    </div>

    <BlockSocial />

    <BlockCopyRight />
  </div>
</footer>)
}

export default Footers07
