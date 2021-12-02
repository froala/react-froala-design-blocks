import React from 'react';

function  Forms09 (props) {
  return(<section className="fdb-block bg-gray">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12  col-md-10 col-lg-8 col-xl-6 text-center">
        <img alt="layers" height="40" src="./imgs/icons/layers.svg" />
        <h1>Never miss an update</h1>
        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        <div className="input-group mt-4 mb-4">
          <input type="text" className="form-control" placeholder="Enter your email address" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
        <p className="h5"><em>*Your email address is safe with us. We never share your email address.</em></p>
      </div>
    </div>
  </div>
</section>)
}

export default Forms09
