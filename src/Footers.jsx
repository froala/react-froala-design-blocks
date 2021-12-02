import React from 'react';

import Footers01 from './footers/Footers01.jsx';
import Footers02 from './footers/Footers02.jsx';
import Footers03 from './footers/Footers03.jsx';
import Footers04 from './footers/Footers04.jsx';
import Footers05 from './footers/Footers05.jsx';
import Footers06 from './footers/Footers06.jsx';
import Footers07 from './footers/Footers07.jsx';
import Footers08 from './footers/Footers08.jsx';
import Footers09 from './footers/Footers09.jsx';
import Footers10 from './footers/Footers10.jsx';
import Footers11 from './footers/Footers11.jsx';
import Footers12 from './footers/Footers12.jsx';

function Footers(props) {
  let dark=false;
  return (
      <div>
        <Footers01 dark={dark} />
        <Footers02 dark={dark} />
        <Footers03 dark={dark} />
        <Footers04 dark={dark} />
        <Footers05 dark={dark} />
        <Footers06 dark={dark} />
        <Footers07 dark={dark} />
        <Footers08 dark={dark} />
        <Footers09 dark={dark} />
        <Footers10 dark={dark} />
        <Footers11 dark={dark} />
        <Footers12 dark={dark} />
      </div>
    )
}

export default Footers