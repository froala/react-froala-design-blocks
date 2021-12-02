import React from 'react';
import CopyRight from "../components/copyright.jsx";

function Footers04(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-12 col-sm-6 col-md-4 text-sm-left">
        <img alt="logo" src="./imgs/logo.png" height="40" />
      </div>

      <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
        <CopyRight />
      </div>

      <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>twitter</span><i className="fab fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>facebook</span><i className="fab fa-facebook" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>instagram</span><i className="fab fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>pinterest</span><i className="fab fa-pinterest" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>google</span><i alt="google" className="fab fa-google" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</footer>)
}

export default Footers04
