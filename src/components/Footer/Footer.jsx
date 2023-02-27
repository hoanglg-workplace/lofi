import React, { useState } from "react";
import "./Footer.scss";
import { chill, jazzy, sleep } from "../../data/songData";
import Player from "../Player/Player";

const Footer = (props) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="footer">
      <div className="author">
        {/* <span>Made by Phuc Le, inspired by Lofi.co</span> */}
        {props.moodModeValue === "chill" ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : props.moodModeValue === "jazzy" ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller">
        {props.moodModeValue === "chill" ? (
          <Player
            volumeValue={props.volumeValue}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : props.moodModeValue === "jazzy" ? (
          <Player
            volumeValue={props.volumeValue}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            volumeValue={props.volumeValue}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
