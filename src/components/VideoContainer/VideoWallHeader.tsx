import React from "react";
import Button from "../Button";
import "./videocontainer.scss";

export interface VideoWallHeaderProps  {
  grid:string[]|number[],
  hide?:boolean
};

export const VideoWallHeader = ({
       grid,
       hide=false
            }: VideoWallHeaderProps) => {
    return (
        <div className={`video-wall-header ${hide?"hide":""}`}>
            <a className="brand-logo">
              <img
                src={"/images/header-minimal-logo-36x36.svg"}
              />
              <h4>{"Kerberos Hub Lite"}</h4>
            </a>
            <div className="grid-list">
              <p className="item"> Grid size</p>
              <div className="numbers">
                {
                  grid.map((num:any) => <Button label={num} icon="" type="outlined" />)
                }
              </div>
            </div>
        </div>
    );
};

