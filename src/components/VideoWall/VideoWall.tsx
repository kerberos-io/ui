import React from "react";
import "./videowall.scss";

export interface VideoWallProps  {
    children?:any,
};

export const VideoWall = ({
        children
            }: VideoWallProps) => {
    return (
        <div className="page-video-wall">
            {children}
        </div>
    );
};

