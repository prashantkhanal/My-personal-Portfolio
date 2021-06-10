import React from 'react';
import './index.css';
import data from '../../config.json';
import Button from '../../UI/Button';

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="hero container">
      <div>
        <p className="text-color hero-heading m-0">
          <span className="hero-hello-text m-0">Hello</span>, I am {data.name}
        </p>
        <h1 className="text-capitalize font-weight-bold hero-proffessional-heading text-color">
          {data.professional}
        </h1>
        <p className="text-capitalize hero-heading text-color">
          {data.jobspec}
        </p>
        <div className="hero-btn p-0">
          <div className="">
            <Button label="Hire Me" />
          </div>
          <div className="hero-btn-cv">
            <Button label="Download CV" inverse={true} />
          </div>
        </div>
      </div>

      <div className="image-section-right">
        <div className="">
          <img src="./assets/images/prashant.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
