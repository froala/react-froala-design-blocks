import React from 'react';

function Contacts08(props) {
  return (<section className={`fdb-block pt-0 ${props.dark ? "bg-dark" : null}`} style={{backgroundImage: `url(./imgs/shapes/8${props.dark ? "dark" : ""}.svg)`}}>
  <div className={`${!props.dark ? "bg-gray" : null}`}>
    <div className="container">
      <div className="row-100"></div>
      <div className="row text-left">
        <div className="col-8">
          <h1>Contact Us</h1>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row-100"></div>
    </div>
  </div>
  <div className="container bg-r">
    <div className="row-100"></div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-5">
        <h2>Call or email</h2>
        <p className="text-large">Support, Sales, and Account Management services are currently available in English</p>

        <p className="h3 mt-4 mt-lg-5">
          <strong>Support</strong>
        </p>
        <p>
          +800 3005 4300
        </p>
        <p>
          <a href="https://www.froala.com">Contact Support</a>
        </p>
        <p>
          Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
        </p>

        <p className="h3 mt-4 mt-lg-5">
          <strong>Sales</strong>
        </p>
        <p>
          +800 3005 4300
        </p>
        <p>
          <a href="https://www.froala.com">Contact Sales</a>
        </p>
        <p>
          Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
        </p>

        <p className="h3 mt-4 mt-lg-5">
          <strong>General inquiries</strong>
        </p>
        <p>
          <a href="https://www.froala.com">hello@website.com</a>
        </p>
      </div>

      <div className="col-12 col-md-6 ml-auto">
        <h2>Drop us a line</h2>
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
              <input type="text" className="form-control" placeholder="Company Name" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Country" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <select className="form-control" required="">
                  <option value="">Select Department</option>
                  <option value="1">Support</option>
                  <option value="2">Sales</option>
                  <option value="3">Accounting</option>
                </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <textarea className="form-control" name="message" rows="5" placeholder="How can we help?"></textarea>
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

export default Contacts08
