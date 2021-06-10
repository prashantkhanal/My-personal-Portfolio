import React from 'react';
import Card from '../../UI/Card';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';

/**
 * @author
 * @function Skill
 **/

const Skill = (props) => {
  return (
    <div className="container">
      <Card style={{ padding: '5rem' }}>
        <MainHeading text="What I DO" />
        <MediumHeading text="Specailize" />
      </Card>
    </div>
  );
};

export default Skill;
