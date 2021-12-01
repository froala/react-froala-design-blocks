import React, { useState, useEffect } from 'react';

function Carousel02(props) {
  
    let [slideNumber, setSlideNumber] = useState(0);
    const maxSlide = 2;

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => {
         clearInterval(intervalId);
      }
    }, []);

    const nextSlide = () => {
        setSlideNumber((slideNumber) => (slideNumber >= maxSlide) ? 0 : slideNumber + 1);
    }

    const prevSlide = () => {
        setSlideNumber((slideNumber) => (slideNumber <= 0) ? maxSlide : slideNumber -1);
    }

    const setSlide = (number) => {
      setSlideNumber(number);
    }

    return (<section className="fdb-block">
  <div className="container">
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" onClick={()=>setSlide(0)} className={!slideNumber || slideNumber === 0 ? "active" : null }></li>
        <li data-target="#carouselExampleIndicators" onClick={()=>setSlide(1)} className={slideNumber === 1 ? "active" : null }></li>
        <li data-target="#carouselExampleIndicators" onClick={()=>setSlide(2)} className={slideNumber === 2 ? "active" : null }></li>
      </ol>
      <div className="carousel-inner">
        <div className={!slideNumber || slideNumber === 0 ? "carousel-item active" : "carousel-item" }>
          <img className="d-block w-100" src="./imgs/carousels/slide1.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide One</h5>
            <p>An impressive attempt</p>
          </div>
        </div>
        <div className={slideNumber === 1 ? "carousel-item active" : "carousel-item" }>
          <img className="d-block w-100" src="./imgs/carousels/slide2.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide Two</h5>
            <p>A slightly darker tone</p>
          </div>
        </div>
        <div className={slideNumber === 2 ? "carousel-item active" : "carousel-item" }>
        <img className="d-block w-100" src="./imgs/carousels/slide3.jpg" alt  ="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide Three</h5>
            <p>Our Darkest Tone</p>
          </div>
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

export default Carousel02
