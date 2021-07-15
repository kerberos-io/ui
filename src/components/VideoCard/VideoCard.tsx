import React from "react";
import Badge from "../Badge";
import Button from "../Button"
import "./videocard.scss";
export interface VideoCardProps {
  label: string;
  headerStatus: string;
  videoStatus: string;
  isVideoWall: boolean;
  handleClickSD: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickHD: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const VideoCard = ({
  label,
  isVideoWall,
  headerStatus,
  videoStatus,
  handleClickHD,
  handleClickSD,
  ...videoProps
}: VideoCardProps) => {
  return (
    <div
      className={
        "video-card" + ` ${isVideoWall ? "is-video-wall" : "no-video-wall"}`
      }
    >
      <div className="video-header">
        <h3>{label}</h3>
        <Badge status={headerStatus} />
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
            <div className="left-tools">
              <Badge status={videoStatus} />
              <p className="item">Camera 12</p>
            </div>

            <div className="right-tools">
              <div className="switcher">
                <button onClick={handleClickSD} id="switch-to-sd">
                  SD
                </button>
                <button onClick={handleClickHD} id="switch-to-hd">
                  HD
                </button>
              </div>
              <p>
                Open Source <span>Docker</span>
              </p>
            </div>
          </div>
          <video {...videoProps}></video>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
