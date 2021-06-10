import React from 'react';
import { colors } from '../style';

/**
 * @author
 * @function Button
 **/

const Button = (props) => {
  console.log(props);

  return (
    <a
      href="https://"
      style={{
        boxSizing: 'border-box',
        padding: '1rem 2rem',
        background: props.inverse ? 'transparent' : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : '#ffffffff',
        display: 'inline-block',
        borderRadius: '2rem',
        boxShadow: props.inverse ? 'none' : '#6dba6d 0px 0px 1rem, 0px',
        border: '1px solid',
        borderColor: props.inverse ? colors.primaryColor : 'transparent',
        fontWeight: '700',
      }}
    >
      {props.label}
    </a>
  );
};

export default Button;
