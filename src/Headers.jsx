import React from 'react';

import Headers01 from './headers/Headers01.jsx';
import Headers02 from './headers/Headers02.jsx';
import Headers03 from './headers/Headers03.jsx';
import Headers04 from './headers/Headers04.jsx';
import Headers05 from './headers/Headers05.jsx';
import Headers06 from './headers/Headers06.jsx';
import Headers07 from './headers/Headers07.jsx';
import Headers08 from './headers/Headers08.jsx';
import Headers09 from './headers/Headers09.jsx';
import Headers10 from './headers/Headers10.jsx';

function Headers(props) {

  let dark=true;

  return (
      <div>
        <Headers01 dark={dark} />
        <Headers02 dark={dark} />
        <Headers03 dark={dark} />
        <Headers04 dark={dark} />
        <Headers05 dark={dark} />
        <Headers06 dark={dark} />
        <Headers07 dark={dark} />
        <Headers08 dark={dark} />
        <Headers09 dark={dark} />
        <Headers10 dark={dark} />
      </div>
    )
}

export default Headers