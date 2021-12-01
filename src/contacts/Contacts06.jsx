import React from 'react';
import Iframe from 'react-iframe';

function Contacts06(props) {
  return (<section className="fdb-block pt-0">
  <div className="container-fluid p-0 pb-5">
    <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
      width="100%" height="300" frameBorder="0" style={{"border":"0"}}  allowFullScreen={true} position="relative"/>
  </div>
  <div className="container">
    <div className="row pt-5">
      <div className="col-12">
        <form>
          <div className="row">
            <div className="col-12 col-md">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md mt-4 mt-md-0">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <label>Your Email</label>
              <input type="email" className="form-control" />
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
          <div className="row mt-4 text-center">
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

export default Contacts06
