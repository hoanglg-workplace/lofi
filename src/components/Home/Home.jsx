import React, { useState } from "react";
import Footer from "../Footer/Footer";
import ModifierBoard from "../ModifierBoard/ModifierBoard";
import RainToggleButton from "../RainToggleButton/RainToggleButton";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import "./Home.scss";

const Home = (props) => {
  const [rain, setRain] = useState(false);
  // props from RainToggleButton
  const [rainValueProp, setRainValueProp] = useState(0);
  const [volumeValueProp, setVolumeValueProp] = useState(50);
  const [moodModeProp, setMoodModeProp] = useState("chill");

  let { darkLightMode } = props.darkLightSwitch;
  let { rainMode } = rain;

  if (!rain) {
    rainMode = "clear";
  } else {
    rainMode = "rain";
  }

  if (!props.darkLightSwitch) {
    darkLightMode = "day";
  } else {
    darkLightMode = "night";
  }

  const combineMode = `${darkLightMode}-${rainMode}`;

  return (
    <div>
    <img className="img_logo" src="./hoang_logo.png" alt="" />

      {/* Day */}
      <video
        className={combineMode === "day-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-sunny.mp4" type="video/mp4" />
      </video>
      <video
        className={combineMode === "day-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-rainny.mp4" type="video/mp4" />
      </video>
      {/* End Day */}

      {/* Night */}
      <video
        className={combineMode === "night-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-clear.mp4" type="video/mp4" />
      </video>
      <video
        className={combineMode === "night-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-rainny.mp4" type="video/mp4" />
      </video>
      {/* End Night */}

      <RainToggleButton
        onClick={() => setRain(!rain)}
        rain={rain}
        setRain={setRain}
        rainValue={rainValueProp}
        setRainValue={setRainValueProp}
      />
      <ModifierBoard
        rainMode={rainMode}
        rain={rain}
        setRain={setRain}
        //
        rainValue={rainValueProp}
        setRainValue={setRainValueProp}
        moodModeValue={moodModeProp}
        setMoodModeValue={setMoodModeProp}
        volumeValue={volumeValueProp}
        setVolumeValue={setVolumeValueProp}
      />
      <YoutubeVideo />
      <Footer
        moodModeValue={moodModeProp}
        setMoodModeValue={setMoodModeProp}
        volumeValue={volumeValueProp}
        setVolumeValue={setVolumeValueProp}
      />
    </div>
  );
};

export default Home;
