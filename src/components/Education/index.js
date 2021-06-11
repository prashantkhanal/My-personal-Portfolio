import React from 'react';
import './style.css';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';
import Tiles from '../../UI/Tiles';
import Card from '../../UI/Card';

/**
* @author
* @function Education

**/

const Education = (props) => {
  return (
    <div className="container" style={{ marginTop: '6rem' }}>
      <div className="">
        <MainHeading text="Qualifation" />
        <MediumHeading text="Education" />
        <div className="" style={{ width: '33rem', margin: '2rem auto' }}>
          <Tiles
            becCollegename="Sunway International College"
            subject="Becholar In Computer Science"
            eduContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deleniti."
          />
          <Tiles
            becCollegename="Texas International College"
            subject="Science"
            eduContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deleniti."
          />
        </div>
      </div>
      <Card>
        <h1 className="text-capitalize text-center text-color font-14">
          Gmail
        </h1>
        <h1 className="text-lowercase text-center">
          Prashantkhanal32@gmail.com
        </h1>
      </Card>
    </div>
  );
};

export default Education;
