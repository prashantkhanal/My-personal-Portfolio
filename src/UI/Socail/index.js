import React from 'react';
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  GithubOutlined,
  InstagramFilled,
} from '@ant-design/icons';
import './style.css';

/**
 * @author
 * @function Socail
 **/

const Socail = (props) => {
  return (
    <div className="socail-connect">
      <a href="https://" className="socail-links">
        <GoogleCircleFilled />
      </a>
      <a href="https://" className="socail-links">
        <TwitterCircleFilled />
      </a>
      <a href="https://" className="socail-links">
        <GithubOutlined />
      </a>
      <a href="https://" className="socail-links">
        <InstagramFilled />
      </a>
    </div>
  );
};

export default Socail;
