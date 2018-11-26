import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Contacts07 extends Component {
  render() {
    return <section className="fdb-block py-0">
  <div className="container py-5" style={{backgroundImage: 'url(imgs/shapes/6.svg)'}}>
    <div className="row text-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p className="lead">If you’re already an active user, please <a href="https://www.froala.com">sign in</a> before contacting us.</p>
      </div>
    </div>
    <div className="row-50">
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <form>
          <div className="row">
            <div className="col">
              <label>Your Email Address</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <label>Subject (optional but helpful)</label>
              <input type="email" className="form-control" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <label>How can we help?</label>
              <textarea className="form-control" name="message" rows="3"></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-right">
              <button type="submit" className="btn btn-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row-100"></div>
  </div>

  <div className="container-fluid p-0">
    <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
      width="100%" height="300" frameBorder="0" style="border:0" allowFullScreen={true} position="relative"/>
  </div>
</section>

  }
}

export default Contacts07
