import React from "react";
import StatusWithBadge from "../StatusWithBadge";
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
  const videoWallWidth = "50vw";
  const widthEmbedded = "";
  return (
    <div
      className="video-card"
      style={{ width: isVideoWall ? videoWallWidth : widthEmbedded }}
    >
      <div
        className="video-header"
        style={{ display: isVideoWall ? "none" : "flex" }}
      >
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
        <div
          className="video-box"
          style={{
            flexDirection: isVideoWall ? "column-reverse" : "column",
            width: isVideoWall ? videoWallWidth : widthEmbedded,
          }}
        >
          <div
            className="video-tools"
            style={{
              marginBottom: isVideoWall ? "0" : "-50px",
              position: isVideoWall ? "absolute" : "relative",
              padding: isVideoWall ? "0px 12px" : "12px 18px",
              width: isVideoWall ? "-webkit-fill-available" : "initial",
            }}
          >
            <div className="left-tools">
              <StatusWithBadge status={videoStatus} />
              <p
                style={{ display: isVideoWall ? "block" : "none" }}
                className="item"
              >
                Camera 12
              </p>
            </div>

            <div className="right-tools">
              <div
                className="switcher"
                style={{ display: isVideoWall ? "none" : "flex" }}
              >
                <button onClick={handleClickSD} id="switch-to-sd">
                  SD
                </button>
                <button onClick={handleClickHD} id="switch-to-hd">
                  HD
                </button>
              </div>
              <p style={{ display: isVideoWall ? "block" : "none" }}>
                Open Source <span>Docker</span>
              </p>
            </div>
          </div>
          <video
            {...videoProps}
            style={{ width: isVideoWall ? videoWallWidth : widthEmbedded }}
          ></video>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
