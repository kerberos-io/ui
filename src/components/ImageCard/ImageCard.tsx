import React from "react";
import Badge from "../Badge";
import Button from "../Button"
import { Block,BlockBody, BlockFooter, BlockHeader } from "../Block";
import { ImageTools } from "./ImageTools";
import { Image } from "./Image";
import { ImageHeader } from "./ImageHeader";
import SetupBox  from "../SetupBox";
import "./imagecard.scss";

export interface ImageCardProps {
  label?: string;
  headerStatus: string;
  headerStatusTitle:string,
  videoStatus: string;
  videoStatusTitle?:string;
  isVideoWall?: boolean;
  isMediaWall?:boolean,
  isOffline?:boolean,
  imageSrc?:string;
  duration?:any,
  month?:any,
  hours?:any,
  camera?:string,
}

export const ImageCard = ({
  label,
  headerStatus,
  headerStatusTitle,
  videoStatus,
  videoStatusTitle,
  isVideoWall,
  isMediaWall,
  isOffline,
  imageSrc,
  duration,
  month,
  hours,
  camera,
}: ImageCardProps) => {
  return (
    <div className={`${isVideoWall?"videocard-wall":"videocard-embedded"} ${isMediaWall?"videocard-media":""}`}>
      <Block>
        { headerStatusTitle && <BlockHeader>
          <ImageHeader statusTitle={headerStatusTitle} status={headerStatus} label={label}/>
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
                    <Image src={imageSrc}/>
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

