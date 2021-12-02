import React from 'react';

function BlockSocial(props) {
  return (<div className="row">
    <div className="col-12 col-lg-2 mt-4 mt-lg-0  text-center">
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>twitter</span><i title="twitter" className="fab fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>facebook</span><i className="fab fa-facebook" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>instagram</span><i className="fab fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>pinterest</span><i className="fab fa-pinterest" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><span style={{"display":"none"}}>google</span><i className="fab fa-google" aria-hidden="true"></i></a>
      </div>
  </div>)
}

export default BlockSocial