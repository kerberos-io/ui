import React from "react";
import Badge from "../Badge";
import Button from "../Button"
import { Block,BlockBody, BlockFooter, BlockHeader } from "../Block";
import { VideoTools } from "./VideoTools";
import { Video } from "./Video";
import { VideoHeader } from "./VideoHeader";
import SetupBox  from "../SetupBox";
import "./videocard.scss";

export interface VideoCardProps {
  label?: string;
  headerStatus: string;
  headerStatusTitle:string,
  videoStatus: string;
  videoStatusTitle?:string;
  isVideoWall?: boolean;
  isMediaWall?:boolean,
  isOffline?:boolean,
  videoSrc?:string;
  videoPoster?:string;
  duration?:any,
  month?:any,
  hours?:any,
  camera?:string,
  handleClickSD?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickHD?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const VideoCard = ({
  label,
  headerStatus,
  headerStatusTitle,
  videoStatus,
  videoStatusTitle,
  isVideoWall,
  isMediaWall,
  isOffline,
  videoSrc,
  videoPoster,
  duration,
  month,
  hours,
  camera,
  handleClickHD,
  handleClickSD,
}: VideoCardProps) => {
  return (
    <div className={`${isVideoWall?"videocard-wall":"videocard-embedded"} ${isMediaWall?"videocard-media":""}`}>
      <Block>
        { headerStatusTitle !== "" && <BlockHeader>
          <VideoHeader statusTitle={headerStatusTitle} status={headerStatus} label={label}/>
        </BlockHeader> }
        {
          isOffline&&!isVideoWall ?
              (<BlockBody>
                  <SetupBox 
                    header="Camera Offline" 
                    text="Camera offlineCamera is not powered or not connected to the network.Check your camera to re-enable live stream and event recording."
                    btnicon="cameras"
                    btnlabel="Manage Cameras"
                    />
              </BlockBody>
              )
              :
              (<BlockBody>
                    <VideoTools camera={camera} duration={duration} status={videoStatus} title={videoStatusTitle} onClickSD={handleClickSD} onClickHD={handleClickHD}  />
                    <Video poster={isOffline?"/images/noise.png":videoPoster} src={videoSrc}/>
                </BlockBody>
              )    
        }      
            <BlockFooter>
              <p className="month">{month}</p>
              <p className="hours">{hours}</p>
            </BlockFooter>
      </Block>
    </div>
  );
};

