import React from 'react';
import Iframe from 'react-iframe';

function Contacts10(props) {
  return (<section className="fdb-block">
  <div className="container">
    <div className="row text-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
    </div>
    <div className="row-70"></div>
    <div className="row">
      <div className="col-12 col-md-8 col-lg m-auto">
        <form>
          <div className="row">
            <div className="col">
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input type="email" className="form-control" placeholder="Subject" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <textarea className="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
        <Iframe className="mb-4" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
          width="100%" height="200" frameBorder="0" style={{"border":"0"}} allowFullScreen={true} position="relative"/>

        <p><strong>Showroom</strong></p>
        <p>
          71 Pilgrim Avenue<br/>Chevy Chase, MD 20815
        </p>
      </div>
    </div>
  </div>
</section>)
}

export default Contacts10
