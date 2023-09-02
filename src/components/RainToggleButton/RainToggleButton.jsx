import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./RainToggleButton.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateRain, updateRainValue} from "../../redux/features/homeSlice";

const RainToggleButton = () => {
  const [rainVolume, setRainVolume] = useState(0);

  const homeState = useSelector((state) => state.home);
  const { rain } = homeState;
  const dispatch = useDispatch();

  const rainButtonHandler = () => {
    if (rainVolume === 0) {
      setRainVolume(30);
      dispatch(updateRainValue(30))
    } else {
      setRainVolume(0);
      dispatch(updateRainValue(0))
    }
    dispatch(updateRain(!rain))
  };

  return (
    <div className="wrapper">
      {rain && (
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
