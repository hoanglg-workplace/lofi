import React, { useState } from "react";
import "./Header.scss";
// import { Link } from 'react-router-dom';
import DarkLightSwitch from "../DarkLightSwitch/DarkLightSwitch";
import { useDispatch, useSelector } from "react-redux";
import { updateDarkLightSwitch } from "../../redux/features/appSlice";

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const appState = useSelector((state) => state.app);
  const { darkLightSwitch } = appState;
  const dispatch = useDispatch();

  let mode = darkLightSwitch;

  if (!darkLightSwitch) {
    mode = "day";
  } else {
    mode = "night";
  }

  const daynightHandler = () => {
    dispatch(updateDarkLightSwitch(!darkLightSwitch));
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <nav className="wrap">
      {/* eslint-disable-next-line */}
      <a>
        <img src="/assets/icons/lofi-logo.gif" alt="" />
      </a>
      <div className="nav-menu">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hoanglg6699"
        >
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
      </div>
      <div className="nav-menu">
        {/* <div onClick={daynightHandler}> */}
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className="fullscreen-btn">
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
