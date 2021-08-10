import React from "react";
import "./videocontainer.scss";

export interface VideoContainerProps  {
    children?:any,
    cols:string|number,
    isVideoWall:boolean
};

export const VideoContainer = ({
        children,
        cols,
        isVideoWall
            }: VideoContainerProps) => {
    return (
        <div className={`video-container ${isVideoWall?"":"video-container-embedded"} cols-${cols}`}>
            {children}
        </div>
    );
};

