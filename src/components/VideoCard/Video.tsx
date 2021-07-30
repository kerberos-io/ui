import React from "react";
import "./videocard.scss";

export interface VideoProps{
    src?:string,
    poster?:string
}


export const Video = ({  src,poster
   }:VideoProps) => {
    return (
        <video className="videocard-video" src={src} poster={poster}/>
    )
}
