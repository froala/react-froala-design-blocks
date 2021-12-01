import React, { Component } from 'react';

import Carousel01 from './carousels/Carousel01.jsx';
import Carousel02 from './carousels/Carousel02.jsx';

class Contents extends Component {
  render() {
    return (
      <div>
        <Carousel01 />
        <Carousel02 />
      </div>
    )
  }
}

export default Contents