import React from "react";
import pause from "../../images/icons/pause.png"

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button className="player__button control-button" onClick={() => handleClick()}>
        <img src={pause} alt="pause"/>
    </button>
  );
}
