import React from 'react';

function Contacts09(props) {
  return (<section className={`fdb-block ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div className="row text-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">
        <p className="h2">support@website.com</p>
        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <p><br/></p>
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

export default Contacts09
