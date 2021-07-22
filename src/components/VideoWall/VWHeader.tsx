import React from "react";
import Button from "../Button";
import "./videowall.scss";
export interface VWHeaderProps  {
  grid:string[]|number[]
};

export const VWHeader = ({
       grid
            }: VWHeaderProps) => {
    return (
        <div className="vw-header">
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

