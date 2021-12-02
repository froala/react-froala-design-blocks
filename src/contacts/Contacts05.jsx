import React from 'react';
import Iframe from 'react-iframe';

function Contacts05(props) {
  return (<section className={`fdb-block pt-0 ${props.dark ? "bg-dark" : null}`}>
  <div className="container-fluid p-0 pb-3">
    <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
      width="100%" height="300" frameBorder="0" style={{"border":"0"}} allowFullScreen={true} position="relative"/>
  </div>
  <div className="container">
    <div className="row text-center justify-content-center pt-5">
      <div className="col-12 col-md-7">
        <h1>Contact Us</h1>
      </div>
    </div>

    <div className="row justify-content-center pt-4">
      <div className="col-12 col-md-7">
        <form>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Email" />
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
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row-100"></div>
  </div>
  <div className="bg-dark">
    <div className="container">
      <div className="row-50"></div>
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md mr-auto ml-auto">
          <img alt="phone" height="40" className="mb-2" src="./imgs/icons/phone.svg" />
          <p className="lead">+44 (112) 123 752</p>
        </div>

        <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
          <img alt="address" height="40" className="mb-2" src="./imgs/icons/navigation.svg" />
          <p className="lead">123 6th St.<br/>Melbourne, FL 32904</p>
        </div>

        <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
          <img alt="email" height="40" className="mb-2" src="./imgs/icons/mail.svg" />
          <p className="lead">support@website.com</p>
        </div>
      </div>
      <div className="row-50"></div>
    </div>
  </div>

  <div className="container">
    <div className="row-70"></div>
    <div className="row text-center">
      <div className="col">
        <p className="h2">
          <a href="https://www.froala.com" className="mx-2"><i className="fab fa-facebook"></i></a>
          <a href="https://www.froala.com" className="mx-2"><i className="fab fa-twitter"></i></a>
          <a href="https://www.froala.com" className="mx-2"><i className="fab fa-instagram"></i></a>
          <a href="https://www.froala.com" className="mx-2"><i className="fab fa-google"></i></a>
          <a href="https://www.froala.com" className="mx-2"><i className="fab fa-pinterest"></i></a>
        </p>
      </div>
    </div>
  </div>
</section>)
}

export default Contacts05
