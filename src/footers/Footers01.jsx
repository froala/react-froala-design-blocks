import React from 'react';
import CopyRight from "../components/blockcopyright.jsx"

function Footers01(props) {
  return (<footer className={`fdb-block footer-small ${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <CopyRight />
  </div>
</footer>)
}

export default Footers01
