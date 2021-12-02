import React, { useState } from 'react';

function Carousel01(props) {
  
    const [slideNumber, setSlideNumber] = useState(0);
    const maxSlide = 2;

    const nextSlide = () => {
      if (slideNumber >= maxSlide) {
        setSlideNumber(0);
      } else {
        setSlideNumber(slideNumber+1);
      }
    }

    const prevSlide = () => {
      if (slideNumber <= 0) {
        setSlideNumber(maxSlide);
      } else {
        setSlideNumber(slideNumber-1);
      }
    }

    return (<section className={`fdb-block ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={!slideNumber || slideNumber === 0 ? "carousel-item active" : "carousel-item" }>
          <img className="d-block w-100" src="./imgs/carousels/slide1.jpg" alt="First slide" />
        </div>
        {console.log("slideNumber",slideNumber)}
        <div className={slideNumber === 1 ? "carousel-item active" : "carousel-item" }>
          <img className="d-block w-100" src="./imgs/carousels/slide2.jpg" alt="Second slide" />
        </div>
        <div className={slideNumber === 2 ? "carousel-item active" : "carousel-item" }>
          <img className="d-block w-100" src="./imgs/carousels/slide3.jpg" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" data-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" data-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
    </div>
</section>)
}

export default Carousel01
