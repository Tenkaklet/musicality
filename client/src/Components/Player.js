import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';



const Player = ({ url }) => {


    return (
        <div className="the-player">
         <H5AudioPlayer autoPlay src={url}>
         </H5AudioPlayer>
        </div>
    );
};

export default Player;
