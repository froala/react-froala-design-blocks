import React from 'react';

function Pricings06(props) {
  return (<section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h1>Pricing Plans</h1>
      </div>
    </div>

    <div className="row mt-5 align-items-top">
      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
        <div className="rounded">
          <div className="bg-dark p-3 text-center">
            <h2 className="font-weight-light">Startup</h2>
            <p className="h2"><strong>$9.90</strong></p>
          </div>

          <div className="bg-gray p-5 text-center">
            <p><img alt="layers" height="40" src="./imgs/icons/layers.svg" /></p>
            <p className="h4"><strong>For small companies</strong></p>
            <p><br/></p>
            <p>10 hours of support</p>
            <p>40MB of storage</p>
            <p>Subdomain</p>

            <p className="text-center pt-5"><a href="https://www.froala.com" className="btn btn-secondary">Choose Plan</a></p>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
        <div className="rounded">
          <div className="bg-dark p-3 text-center">
            <h2 className="font-weight-light">Standard</h2>
            <p className="h2"><strong>$19.90</strong></p>
          </div>

          <div className="bg-gray p-5 text-center">
            <p><img alt="monitor" height="40" src="./imgs/icons/monitor.svg" /></p>
            <p className="h4"><strong>For medium companies</strong></p>
            <p><br/></p>
            <p>10 hours of support</p>
            <p>40MB of storage</p>
            <p>Subdomain</p>

            <p className="text-center pt-5"><a href="https://www.froala.com" className="btn btn-secondary">Choose Plan</a></p>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
        <div className="rounded">
          <div className="bg-dark p-3 text-center">
            <h2 className="font-weight-light">Business</h2>
            <p className="h2"><strong>$29.90</strong></p>
          </div>

          <div className="bg-gray p-5 text-center">
            <p><img alt="package" height="40" src="./imgs/icons/package.svg" /></p>
            <p className="h4"><strong>For large companies</strong></p>
            <p><br/></p>
            <p>10 hours of support</p>
            <p>40MB of storage</p>
            <p>Subdomain</p>

            <p className="text-center pt-5"><a href="https://www.froala.com" className="btn btn-secondary">Choose Plan</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>)
}

export default Pricings06
