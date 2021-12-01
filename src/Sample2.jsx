import React, { Component } from 'react';

import Header from './headers/Headers02.jsx';
import Footer from './footers/Footers02.jsx';
import CallToAction from './call-to-action/CallToAction02.jsx';
import Contents from './contents/Contents02.jsx';
import Contacts from './contacts/Contacts02.jsx';
import Features from './features/Features02.jsx';
import Forms from './forms/Forms02.jsx';

class Headers extends Component {
  render() {
    return (
      <div>
        <hr />
        <Header />
        <CallToAction />
        <Contents />
        <Features />
        <Contacts />
        <Forms />
        <Footer />
      </div>
    )
  }
}

export default Headers