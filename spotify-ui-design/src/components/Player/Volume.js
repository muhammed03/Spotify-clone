import React from "react";
import volume from "../../assets/images/icons/volume.png"

export default function Volume() {

  
  return (

    <div className="nowPlaiyngRight">
        <div className="volumeBar">
            <button className="control-button volume">
                <img src={volume} alt="volume"/>
            </button>

            <div className="progressBar">
                <div className="progressBarBg">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    </div>

  );
}
