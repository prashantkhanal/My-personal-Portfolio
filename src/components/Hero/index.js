import React from 'react';
import './index.css';
import data from '../../config.json';

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="hero">
      <div>
        <p>
          <span>Hello</span>, I am {data.name}
        </p>
        <h1>{data.professional}</h1>
        <p>{data.jobspec}</p>
      </div>
      <div className="image-section-right">
        <img src="./assets/images/prashant.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
