import React from 'react';

function Contacts02(props) {
  return (<section className={`fdb-block ${props.dark ? "bg-dark" : null}`} style={{backgroundImage: 'url(imgs/hero/blue.svg)'}}>
  <div className="container">
    <div className="row text-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <h2>We would love to hear from you!</h2>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-12">
        <form>
          <div className="row">
            <div className="col-12 col-md">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-12 col-md mt-4 mt-md-0">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-12 col-md mt-4 mt-md-0">
              <input type="text" className="form-control" placeholder="Phone (optional)" />
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
              <button type="submit" className="btn btn-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>)
}

export default Contacts02
