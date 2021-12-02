import React from 'react';

function Contents34(props) {
  return (<section className={`fdb-block pb-0 ${props.dark ? "bg-dark" : null}`} style={{backgroundImage: 'url(imgs/hero/purple.svg)'}}>
  <div className="container">
    <div className="row text-left justify-content-end">
      <div className="col-12 col-md-6 col-xl-5"> 
        <div className="fdb-box rounded-bottom-0" style={{"background":`${props.dark ? "grey" : ""}` }}>
          <h2><strong>Design Blocks</strong></h2>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

          <p className="lead mt-4"><a className="btn btn-outline-primary" href="https://www.froala.com">Read More</a></p>
        </div>
      </div>
    </div>
  </div>
</section>)
}



export default Contents34
