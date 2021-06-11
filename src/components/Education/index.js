import React from 'react';
import './style.css';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';
import Tiles from '../../UI/Tiles';
import {
  becholarCollegeName,
  becholarDecs,
  becholarSubject,
  plus2CollegeName,
  plus2Dec,
  plus2Subject,
} from '../../config.json';

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
            becCollegename={becholarCollegeName}
            subject={becholarSubject}
            eduContent=" "
          />
          <Tiles
            becCollegename={plus2CollegeName}
            subject={plus2Subject}
            eduContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deleniti."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
