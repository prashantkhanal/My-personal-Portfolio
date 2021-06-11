import React from 'react';
import Card from './Card';

export default function Tiles(props) {
  return (
    <div style={{ margin: '3rem' }}>
      <Card>
        <div className="" style={{ margin: '2rem 1.2rem' }}>
          <h1 className=" mb-4 text-capitalize letter primaryColor font13">
            {props.becCollegename}
          </h1>
          <h2 className="text-color  text-capitalize font16">
            {props.subject}
          </h2>
          <p className="font10 text-capitalize ">{props.eduContent}</p>
        </div>
      </Card>
    </div>
  );
}
