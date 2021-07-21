import React from "react";
import "./videocard.scss"
import Badge from "../Badge";
export interface VideoToolsProps{
    status: string;
    title?:string,
    duration?:any,
    camera?:string,
    onClickSD?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    onClickHD?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}


export const VideoTools = ({  
    onClickHD,
    onClickSD,
    status,
    title,
    duration,
    camera}:VideoToolsProps) => {
    return (
        <div className="video-tools">
            <div className="duration">
                    <span>{duration}</span>
                </div>
            <div className="left-tools">
                <Badge status={status} title={title}/>
                <p className="cam-name">{camera}</p>
            </div>

            <div className="right-tools">                
                <div className="switcher">
                    <button onClick={onClickSD} id="switch-to-sd">
                        SD
                    </button>
                    <button onClick={onClickHD} id="switch-to-hd">
                        HD
                    </button>
                   
                </div>
                <div className="project-status">
                    <p >Open Source <span>Docker</span></p>
                </div>
            </div>
        </div>
    )
}
