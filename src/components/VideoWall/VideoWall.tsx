import React from "react";
import Icon from "../Icon";
import "./videowall.scss";

export interface VideoWallProps  {
    children?:any,
};

export const VideoWall = ({
        children
            }: VideoWallProps) => {
    return (
        <div className="video-wall">
            {children}
        </div>
    );
};

