import React, { Component } from 'react';

class Lists02 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col col-md-8 text-center">
        <h1>List Block</h1>
      </div>
    </div>
    <div className="row  justify-content-center">
      <div className="col-lg-6 col-md-8">
        <ul class="list-group">
          <li class="list-group-item active">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  }
}

export default Lists02