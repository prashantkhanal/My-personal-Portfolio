import React from 'react';
import './style.css';

/**
 * @author
 * @function Card
 **/

const Card = ({ className = null, style, children, ...rest }) => {
  const _class = className ? `card-body ${className}` : 'card';

  return (
    <div className={_class} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Card;
