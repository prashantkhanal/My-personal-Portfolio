import React from 'react';
import skillData from '../../configData';
import Card from '../../UI/Card';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';
import Skills from '../../UI/Skills';
import './index.css';

/**
 * @author
 * @function Skill
 **/

const Skill = (props) => {
  return (
    <div className="container">
      <Card style={{ padding: '5rem' }}>
        <MainHeading text="What I DO" />
        <MediumHeading text="Specializing In" />
        <div className="skill-section">
          {skillData.map((e, i) => (
            <Skills
              key={i}
              value={e.value}
              skillName={e.skillName}
              skillDec={e.skillDec}
              textColor={e.textColor}
              pathColor={e.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Skill;
