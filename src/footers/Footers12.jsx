import React from 'react';

function Footers12(props) {
  return (<footer className={`fdb-block footer-large ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h3>Company Name</h3>
        <p>70 Bowman St.<br/>South Windsor, CT 06074</p>
        <p>USA</p>
        <p>+13 827 312 5002</p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col text-center">
        <p className="lead">
          <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>twitter</span><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>facebook</span><i className="fab fa-facebook" aria-hidden="true"></i></a>
          <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>instagram</span><i className="fab fa-instagram" aria-hidden="true"></i></a>
          <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>pinterest</span><i className="fab fa-pinterest" aria-hidden="true"></i></a>
          <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>google</span><i className="fab fa-google" aria-hidden="true"></i></a>
        </p>
      </div>
    </div>
  </div>
</footer>)
}

export default Footers12
