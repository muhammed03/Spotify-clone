import React from "react";
import shuffle from "../../../assets/images/icons/shuffle.png"
import previous from "../../../assets/images/icons/previous.png"
import next from "../../../assets/images/icons/next.png"
import repeat from "../../../assets/images/icons/repeat.png"
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import './styles.scss';

import useAudioPlayer from './useAudioPlayer';

function Audio({checkedAudio}) {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  return (
    <div className="player">
      <div className="player-content">
        <audio id="audio">
          <source src={checkedAudio.audio_url} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <div className="controls">
          <button className="control-button shuffle">
              <img src={shuffle} alt="shuffle" />
          </button>
          <button className="control-button previous">
              <img src={previous} alt="previous" />
          </button>         
          {playing ? 
            <Pause handleClick={() => setPlaying(false)} /> :
            <Play handleClick={() => setPlaying(true)} />
          }
          <button className="control-button next">
              <img src={next} alt="next" />
          </button>
          <button className="control-button repeat">
              <img src={repeat} alt="repeat" />
          </button>
        </div>
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}

export default Audio;
