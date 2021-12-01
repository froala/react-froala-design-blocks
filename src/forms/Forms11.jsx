import React, { Component } from 'react';

class Forms11 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5">
        <img alt="chat" className="img-fluid" src="./imgs/draws/group-chat.svg" />
      </div>
      <div className="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left">
        <div className="row">
          <div className="col">
            <h1>Subscribe</h1>
            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter your email address" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="h4">* Leave your email address to be notified first.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Forms11
