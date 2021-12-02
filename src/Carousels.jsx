import React from 'react';

import Carousel01 from './carousels/Carousel01.jsx';
import Carousel02 from './carousels/Carousel02.jsx';

function Contents(props) {

  let dark=true;

  return (
      <div>
        <Carousel01 dark={dark} />
        <Carousel02 dark={dark} />
      </div>
    )
}

export default Contents