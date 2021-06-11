import React, { useState } from 'react';
import {theme}

/**
 * @author
 * @function NightMode
 **/

const NightMode = (props) => {
  const [theme, setTheme] = useState('');
  const handleClick = (e) => {};
  return (
    <div className="container">
      <div className="d-flex flex-end">
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default NightMode;
