import React, { useState, useRef, useEffect } from "react";

import "./Player.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentSongIndex } from "../../redux/features/footerSlice";

const Player = ({ songs }) => {
  const footerState = useSelector((state) => state.footer);
  const { currentSongIndex } = footerState;
  const homeState = useSelector((state) => state.home);
  const { volumeValue } = homeState;
  const dispatch = useDispatch();

  const audioElement = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  });

  const SkipSong = (forwards = true) => {
    let newSongIndex;

    if (forwards) {
      newSongIndex = currentSongIndex + 1;
      if (newSongIndex > songs.length - 1) {
        newSongIndex = 0;
      }
    } else {
      newSongIndex = currentSongIndex - 1;
      if (newSongIndex < 0) {
        newSongIndex = songs.length - 1;
      }
    }

    dispatch(updateCurrentSongIndex(newSongIndex));
  };

  return (
    <div className="music-player">
      <audio loop src={songs[currentSongIndex].src} ref={audioElement}></audio>
      <div className="music-player--controls">
        <button className="skip-btn" onClick={() => SkipSong(false)}>
          <img src="/assets/icons/prev.svg" alt="" />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src="/assets/icons/pause.svg" alt="" />
          ) : (
            <img src="/assets/icons/play.svg" alt="" />
          )}
        </button>
        <button className="skip-btn" onClick={() => SkipSong()}>
          <img src="/assets/icons/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
