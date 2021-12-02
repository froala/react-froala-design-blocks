import React, { Component } from 'react';

import Lists01 from './lists/Lists01.jsx';
import Lists02 from './lists/Lists02.jsx';
import Lists03 from './lists/Lists03.jsx';
import Lists04 from './lists/Lists04.jsx';
import Lists05 from './lists/Lists05.jsx';
import Lists06 from './lists/Lists06.jsx';

class Contents extends Component {
  render() {
    return (
      <div>
        <Lists01 />
        <Lists02 />
        <Lists03 />
        <Lists04 />
        <Lists05 />
        <Lists06 /> 
      </div>
    )
  }
}

export default Contents