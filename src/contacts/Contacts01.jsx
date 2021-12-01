import React from 'react';
import Iframe from 'react-iframe';

function Contacts01(props) {
  return (<section className="fdb-block pt-0">
  <div className="container-fluid p-0 pb-md-5">
    <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
      width="100%" height="300" frameBorder="0" style={{"border":"0"}} allowFullScreen={true} position="relative"/>
  </div>
  <div className="container">
    <div className="row mt-5">
      <div className="col-12 col-md-6 col-lg-5">
        <h2>Contact Us</h2>
        <p className="lead">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
        </p>

        <p className="lead">
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>


        <p className="h3 mt-5">
          <strong>Email:</strong> <a href="https://www.froala.com">hello@website.com</a>
        </p>
        <p className="lead">
          <strong>Phone:</strong> <a href="https://www.froala.com">+44 123 123 1232</a>
        </p>
      </div>

      <div className="col-12 col-md-6 ml-auto pt-5 pt-md-0">
        <form>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>

          <div className="row mt-4">
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

export default Contacts01
