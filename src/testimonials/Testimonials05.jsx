import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Testimonials05 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'imgs/bg_2.svg'}}>
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-9 col-xl-6">
        <div className="fdb-box">
          <div className="row">
            <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
              <img alt="image" className="img-fluid" src="./imgs/img_round.svg" />
            </div>

            <div className="col-md-8 mt-4 mt-md-0">
              <p className="h3">
                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              </p>

              <p className="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
              <p><em>Co-founder at Company</em></p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-9 col-xl-6 mt-4 mt-xl-0">
        <div className="fdb-box">
          <div className="row">
            <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
              <img alt="image" className="img-fluid" src="./imgs/img_round.svg" />
            </div>

            <div className="col-md-8 mt-4 mt-md-0">
              <p className="h3">
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
              </p>

              <p className="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
              <p><em>Co-founder at Company</em></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Testimonials05
