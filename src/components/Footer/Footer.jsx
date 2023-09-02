import React from "react";
import "./Footer.scss";
import { chill, jazzy, sleep } from "../../data/songData";
import Player from "../Player/Player";
import { useSelector } from "react-redux";

const Footer = () => {
  const footerState = useSelector((state) => state.footer);
  const { currentSongIndex } = footerState;
  const homeState = useSelector((state) => state.home);
  const { moodMode } = homeState;

  return (
    <div className="footer">
      <div className="author">
        {moodMode === "chill" ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : moodMode === "jazzy" ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller">
        {moodMode === "chill" ? (
          <Player
            songs={chill}
          />
        ) : moodMode === "jazzy" ? (
          <Player
            songs={jazzy}
          />
        ) : (
          <Player
            songs={sleep}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
