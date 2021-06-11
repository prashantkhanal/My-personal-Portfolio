import React from 'react';
import MainHeading from '../../UI/MainHeading';
import { email } from '../../config.json';

/**
 * @author
 * @function ContactMe
 **/

const ContactMe = (props) => {
  return (
    <div className="container mt-5" style={{ marginTop: '5rem' }}>
      <div className="mt-5">
        <MainHeading text="Contact Me" />

        <h1 className="text-capitalize text-center text-color font-14 mt-3">
          Gmail
        </h1>
        <h1 className="text-lowercase text-center  font-14">{email}</h1>
      </div>
    </div>
  );
};

export default ContactMe;
