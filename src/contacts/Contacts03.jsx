import React from 'react';
import Iframe from 'react-iframe';

function Contacts03(props) {
  return (<section className={`fdb-block ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p className="lead">One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-12 col-md-6">
        <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
          width="100%" height="300" frameBorder="0" style={{"border":"0"}} allowFullScreen={true} position="relative"/>
      </div>

      <div className="col-12 col-md-6 pt-5 pt-md-0">
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
    </div>
  </div>
</section>)
}

export default Contacts03
