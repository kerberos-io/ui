import React from "react";
import Icon from "../Icon";
import "./videowall.scss";

export interface VWBodyProps  {
    children?:any,
    grid?:number
};

export const VWBody = ({
        grid,
        children
            }: VWBodyProps) => {
    return (
            <div className="grid-container">
            {children}
            </div>
    );
};

