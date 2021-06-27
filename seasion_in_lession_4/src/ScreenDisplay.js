import React from 'react';
import './ScreenDisplay.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const configSeason = {
  summer: {
    text: "It's so hot!",
    iconName: 'sun',
  },
  winter: {
    text: 'OMG So Cool!',
    iconName: 'fake',
  },
};

const ScreenDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = configSeason[season];

  return (
    <>
      <div className={`container ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    </>
  );
};

export default ScreenDisplay;
