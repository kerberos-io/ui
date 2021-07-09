import React from "react";
import StatusWithBadge from "../StatusWithBadge";
import "./videocard.scss";

export interface VideoCardProps {
    label: string;
    headerStatus:string;
    videoStatus:string;
    videoSource:string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  const VideoCard = ({ onClick, label,headerStatus,videoStatus,videoSource }: VideoCardProps) => {
    return (
      <div className="video-card">
        <div className="video-header">
          <h3>{label}</h3>
          <StatusWithBadge status={headerStatus} />
        </div>
        <div className="video-box">
          <div className="video-tools">
            <StatusWithBadge status={videoStatus}/>
            <div className="switcher">
              <span>SD</span>
              <span>HD</span>
            </div>
          </div>
          <video poster={videoSource}></video>
        </div>
      </div>
    );
  };
  
  export default VideoCard