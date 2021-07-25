import React from "react";
import "./videowall.scss";

export interface VideoWallProps  {
    children?:any,
    hide:boolean
};

export const VideoWall = ({
        children,
        hide
            }: VideoWallProps) => {
    return (
        <div className={`page-video-wall ${hide?"hide":""} `}>
            {children}
        </div>
    );
};

