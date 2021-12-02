import React from 'react';

function Contacts04(props) {
  return (<section className={`fdb-block py-0 ${props.dark ? "bg-dark" : null}`}>
  <div className="container py-5 my-5" style={{backgroundImage: 'url(imgs/shapes/9.svg)'}}>
    <div className="row py-5">
      <div className="col py-5">
        <div className="fdb-box fdb-touch">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
              <h1>Contact Us</h1>
              <p className="lead">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
            </div>
          </div>

          <div className="row justify-content-center pt-4">
            <div className="col-12 col-md-8">
              <form>
                <div className="row">
                  <div className="col-12 col-md">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-12 col-md mt-4 mt-md-0">
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
        </div>
      </div>
    </div>
  </div>
</section>)
}

export default Contacts04
