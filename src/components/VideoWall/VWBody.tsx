import React from "react";
import "./videowall.scss";

export interface VWBodyProps  {
    children?:any,
    cols?:number
};

export const VWBody = ({
        cols,
        children
            }: VWBodyProps) => {
    return (
            <div className={`grid-container grid-${cols}`}>
            {children}
            </div>
    );
};

