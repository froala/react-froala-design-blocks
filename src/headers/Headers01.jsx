import React from 'react';

function Headers01(props) {
  return (<header className={`${props.dark ? "bg-dark" : null}`}>
  <div className="container">
    <nav className="navbar">
      <a href="https://www.froala.com">
        <img src="./imgs/logo.png" height="30" alt="logo" />
      </a>
    </nav>
  </div>
</header>)
}

export default Headers01
