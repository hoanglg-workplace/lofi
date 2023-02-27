import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./RainToggleButton.scss";

const RainToggleButton = (props) => {
  const [rainVolume, setRainVolume] = useState(0);

  const rainButtonHandler = () => {
    if (rainVolume === 0) {
      setRainVolume(30);
      props.setRainValue(30)
    } else {
      setRainVolume(0);
      props.setRainValue(0)
    }
    props.setRain(!props.rain);
  };

  return (
    <div className="wrapper">
      {props.rain && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="./assets/musics/rain_city.mp3"
          loop
          volume={rainVolume / 100}
        />
      )}
      <div className="button" onClick={rainButtonHandler}>
        <div className="icon">
          <i className="fas fa-cloud-rain"></i>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;
