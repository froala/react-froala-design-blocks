import React, { useState } from 'react';

function Gallery01(props) {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ currentImage, setCurrentImage ] = useState({})

  const openModal = (imageData) => {
    setModalVisible(true)
    setCurrentImage(imageData);
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (<section className="fdb-block">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="thumbnail" style={{"cursor":"pointer"}} onClick={() => openModal({ "name": "Slide 1", "src":"./imgs/carousels/slide1.jpg", description: ["Slide 1 description"] })}>
            <img src="./imgs/carousels/slide1.jpg" alt="Lights" style={{"width":"100%"}} />
            <div className="caption">
              <p>Slide 1 description</p>
            </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="thumbnail" style={{"cursor":"pointer"}} onClick={() => openModal({ "name": "Slide 2", "src":"./imgs/carousels/slide2.jpg", description: ["Slide 2 description"] })}>
            <img src="./imgs/carousels/slide2.jpg" alt="Nature" style={{"width":"100%"}} />
            <div className="caption">
              <p>Slide 2 description</p>
            </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="thumbnail" style={{"cursor":"pointer"}} onClick={() => openModal({ "name": "Slide 3", "src":"./imgs/carousels/slide3.jpg", description: ["Slide 3 description"] })}>
            <img src="./imgs/carousels/slide3.jpg" alt="Fjords" style={{"width":"100%"}} />
            <div className="caption">
              <p>Slide 3 description</p>
            </div>
        </div>
      </div>
    </div>
    {(modalVisible) ? 
    <div className="modal show" tabindex="-1" role="dialog" style={{"display":"block"}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{currentImage.name}</h5>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true" onClick={closeModal}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={currentImage.src} alt={currentImage.name} style={{"width":"100%"}} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
   : null }
  </div>
</section>)
}

export default Gallery01
