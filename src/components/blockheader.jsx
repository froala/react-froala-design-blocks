import React from 'react';

function BlockHeader(props) {
  return (<div className="row justify-content-center">
  <div className="col col-md-8 text-center">
    <h1>{props.header}</h1>
  </div>
</div>)
}

export default BlockHeader