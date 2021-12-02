import React from 'react';

function  Forms05 (props) {
  return(<section className="fdb-block py-0">
  <div className="container py-5 my-5" style={{backgroundImage: 'url(imgs/shapes/4.svg)'}}>
    <div className=" row justify-content-end">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-left">
        <div className="fdb-box">
          <div className="row">
            <div className="col">
              <h1>Log In</h1>
              <p className="lead">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>
            </div>
          </div>
          <div className="row">
            <div className="col mt-4">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <button className="btn btn-secondary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>)
}

export default Forms05
