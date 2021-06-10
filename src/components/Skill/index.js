import React from 'react';
import { colors } from '../../style';
import Card from '../../UI/Card';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';
import Skills from '../../UI/Skills';
import './index.css';
// import colors from '../../style';

const skillData = [
  {
    skillName: 'HTML/CSS',
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    value: 75,
    textColor: colors.primaryColor,
    pathColor: '#f2a154',
  },
  {
    skillName: 'JavaScript',
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    value: 70,
    textColor: colors.primaryColor,
    pathColor: '#f9f871',
  },
  {
    skillName: 'ReactJS',
    value: 73,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#00af91',
  },
  {
    skillName: 'NodeJS',
    value: 80,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#54e346',
  },
  {
    skillName: 'Graphql',
    value: 58,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#111d5e',
  },
  {
    skillName: 'Mysql',
    value: 80,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#f88f01',
  },
  {
    skillName: 'Python',
    value: 55,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#cf0000',
  },
  {
    skillName: 'Django',
    value: 40,
    skillDec: 'Lorem ipsum dolor sit amet consectetur, elit.',
    textColor: colors.primaryColor,
    pathColor: '#f8a488',
  },
];

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
