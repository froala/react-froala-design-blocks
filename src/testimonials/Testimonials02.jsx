import React, { Component } from 'react';

class Testimonials02 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'url(imgs/hero/red.svg)'}}>
  <div className="container">
    <div className="fdb-box">
      <div className="row align-items-center justify-content-center">
        <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto">
          <img alt="person name" className="img-fluid rounded-circle" src="./imgs/people/3.jpg" />
        </div>

        <div className="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0">
          <p className="lead">
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
          </p>

          <p className="h3 mt-4 mt-lg-5"><strong>Person Name</strong></p>
          <p><em>Co-founder at Company</em></p>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Testimonials02
