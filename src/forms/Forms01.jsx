import React from 'react';

function  Forms01 (props) {
  return (<section className="fdb-block">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 text-center">
        <h1>Subscribe</h1>
        <div className="input-group mt-4 mb-4">
          <input type="text" className="form-control" placeholder="Enter your email address" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>

        <p className="h4">Find us on <a href="https://www.froala.com">Facebook</a> and <a href="https://www.froala.com">Twitter</a>.</p>
      </div>
    </div>
  </div>
</section>)
}

export default Forms01
