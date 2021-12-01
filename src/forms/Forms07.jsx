import React from 'react';

function  Forms07 (props) {
  return(<section className="fdb-block" style={{backgroundImage: 'url(imgs/hero/red.svg)'}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
        <div className="fdb-box">
          <div className="row">
            <div className="col">
              <h1>Log In</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input type="password" className="form-control mb-1" placeholder="Password" />
              <p className="text-right"><a href="https://www.froala.com">Recover Password</a></p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <button className="btn btn-outline-secondary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>)
}

export default Forms07
