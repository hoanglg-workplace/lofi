import React from "react";
import Footer from "../Footer/Footer";
import ModifierBoard from "../ModifierBoard/ModifierBoard";
import RainToggleButton from "../RainToggleButton/RainToggleButton";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateRain } from "../../redux/features/homeSlice";

const Home = () => {
  // props from RainToggleButton
  const appState = useSelector((state) => state.app);
  const { darkLightSwitch } = appState;
  const homeState = useSelector((state) => state.home);
  const { rain } = homeState;
  const dispatch = useDispatch();

  let { darkLightMode } = darkLightSwitch;
  let { rainMode } = rain;

  if (!rain) {
    rainMode = "clear";
  } else {
    rainMode = "rain";
  }

  if (!darkLightSwitch) {
    darkLightMode = "day";
  } else {
    darkLightMode = "night";
  }

  const combineMode = `${darkLightMode}-${rainMode}`;

  return (
    <div className="Home_wrapper">
      {/* <img className="img_logo" src="./hoang_logo.png" alt="" /> */}

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

      <RainToggleButton onClick={() => dispatch(updateRain(!rain))} />
      <ModifierBoard rainMode={rainMode} />
      <YoutubeVideo />
      <Footer />
    </div>
  );
};

export default Home;
