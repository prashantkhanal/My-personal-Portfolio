import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';

/**
 * @author
 * @function Skills
 **/

const Skills = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-center">
      <div className="skills-logo mtb-10">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>
      <div className="">
        <p className="font16 font-500 text-color"> {props.skillName}</p>
        <p className="skillColor tGray font13 "> {props.skillDec}</p>
      </div>
    </div>
  );
};

export default Skills;
