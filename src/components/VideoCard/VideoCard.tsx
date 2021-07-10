import React from "react";
import StatusWithBadge from "../StatusWithBadge";
import Button from "../Button"
import "./videocard.scss";
export interface VideoCardProps {
  label: string;
  headerStatus: string;
  videoStatus: string;
  handleClickSD: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickHD: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const VideoCard = ({
  label,
  headerStatus,
  videoStatus,
  handleClickHD,
  handleClickSD,
  ...videoProps
}: VideoCardProps) => {
  return (
    <div className="video-card">
      <div className="video-header">
        <h3>{label}</h3>
        <StatusWithBadge status={headerStatus} />
      </div>
      {headerStatus === "offline" ? (
        <div className="offline-box">
          <div className="info">
            <h3>Camera offline</h3>
            <p className="item">
              Camera is not powered or not connected to the network.Check your
              camera to re-enable live stream and event recording.
            </p>
          </div>
          <Button icon="cameras" label="Manage Cameras" type="default" />
        </div>
      ) : (
        <div className="video-box">
          <div className="video-tools">
            <StatusWithBadge status={videoStatus} />
            <div className="switcher">
              <button onClick={handleClickSD} id="switch-to-sd">
                SD
              </button>
              <button onClick={handleClickHD} id="switch-to-hd">
                HD
              </button>
            </div>
          </div>
          <video {...videoProps}></video>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
