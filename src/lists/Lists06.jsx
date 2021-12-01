import React, { Component } from 'react';

class Lists06 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col col-md-8 text-center">
        <h1>List Block</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="list-group">
          <a href="#1" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1" style={{"color":"white"}}>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a href="#2" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a href="#3" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Lists06
