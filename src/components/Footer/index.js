import React from 'react';
import Socail from '../../UI/Socail';
import { WechatOutlined } from '@ant-design/icons';
import './style.css';

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container mt-5">
      <div className="footer">
        <div
          className="d-flex justify-content-between"
          style={{ margin: '3rem' }}
        >
          <div className="d-flex footer-socail">
            <Socail />
          </div>
          <div className="d-flex footer-list">
            <p className="text-capitalize font-14 text-color">Home</p>
            <p className="text-capitalize font-14 text-color">Contact Me</p>
            <p className="text-capitalize font-14 text-color">About Me</p>
            <p className="text-capitalize font-14 text-color">Blog</p>
          </div>
          <div className="primaryColor footer-chat-logo">
            <WechatOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
