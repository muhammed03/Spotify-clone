import React from "react";
import play from "../../../assets/images/icons/play.png"

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button control-button" onClick={() => handleClick()}>
        <img src={play} alt="play"/>
    </button>
  );
}
