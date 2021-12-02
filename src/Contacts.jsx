import React from 'react';

import Contacts01 from './contacts/Contacts01.jsx';
import Contacts02 from './contacts/Contacts02.jsx';
import Contacts03 from './contacts/Contacts03.jsx';
import Contacts04 from './contacts/Contacts04.jsx';
import Contacts05 from './contacts/Contacts05.jsx';
import Contacts06 from './contacts/Contacts06.jsx';
import Contacts07 from './contacts/Contacts07.jsx';
import Contacts08 from './contacts/Contacts08.jsx';
import Contacts09 from './contacts/Contacts09.jsx';
import Contacts10 from './contacts/Contacts10.jsx';

function Contacts(props) {

  let dark=true;

  return (
      <div>
        <Contacts01 dark={dark} />
        <Contacts02 dark={dark} />
        <Contacts03 dark={dark} />
        <Contacts04 dark={dark} />
        <Contacts05 dark={dark} />
        <Contacts06 dark={dark} />
        <Contacts07 dark={dark} />
        <Contacts08 dark={dark} />
        <Contacts09 dark={dark} />
        <Contacts10 dark={dark} />
      </div>
    )
}

export default Contacts