import React from "react";
import "./imagecard.scss";

export interface ImageProps{
    src?:string,
    poster?:string
}


export const Image = ({  src,poster
   }:ImageProps) => {
    return (
        <img className="videocard-video" src={src}/>
    )
}
