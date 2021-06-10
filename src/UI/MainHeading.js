import React from 'react';

/**
 * @author
 * @function MainHeading
 **/

const MainHeading = ({ text }) => {
  return (
    <p className="text-capitalize text-center primay primaryColor font-14 font-600">
      {text}
    </p>
  );
};

export default MainHeading;
