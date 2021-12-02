import React from 'react';

import Gallery01 from './gallery/Gallery01.jsx';
import Gallery02 from './gallery/Gallery02.jsx';

function Gallery(props) {

  let dark=true;

  return (
      <div>
        <Gallery01 dark={dark} />
        <Gallery02 dark={dark} />
      </div>
    )
}

export default Gallery