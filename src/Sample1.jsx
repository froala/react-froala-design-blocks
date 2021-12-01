import React, { Component } from 'react';

import Header from './headers/Headers01.jsx';
import Footer from './footers/Footers01.jsx';
import CallToAction from './call-to-action/CallToAction01.jsx';
import Contents from './contents/Contents01.jsx';
import Contacts from './contacts/Contacts01.jsx';
import Features from './features/Features01.jsx';
import Forms from './forms/Forms01.jsx';

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