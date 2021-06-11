import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { colors } from '../../style';
import Card from '../../UI/Card';
import MainHeading from '../../UI/MainHeading';
import MediumHeading from '../../UI/MediumHeading';
import me from '../../assets/images/prashant.png';
import './style.css';
import Socail from '../../UI/Socail';
import { expertise, expertisePercentage } from '../../config.json';

/**
 * @author
 * @function Expertise
 **/

const Expertise = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div>
          <MainHeading text="Expertise" />
          <MediumHeading text="Special Skills" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div className="rightImgContainer">
            <img src={me} alt="" />
            <Socail />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <Card
            className=""
            style={{
              padding: '3rem',
              width: '32rem',
              marginTop: '6rem',
            }}
          >
            <div className="d-flex align-items-center">
              <div style={{ width: '8rem', height: '8rem' }}>
                {/* <div ></div> */}
                <CircularProgressbar
                  value={expertisePercentage}
                  text={`${expertisePercentage}%`}
                  styles={buildStyles({
                    textColor: colors.primaryColor,
                    pathColor: '#54e346',
                  })}
                />
              </div>
              <h2 className="mlr-10 text-color">{expertise}</h2>
            </div>
            <p className="font13 mt-3">
              Javascript is the most popular lanahues in the world
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
