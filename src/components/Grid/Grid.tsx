import React from "react";
import "./grid.scss";

export interface GridProps  {
    columns?: number;
    placeholderText?: string;
};

const Grid = ({
                 columns = 1
            }: GridProps) => {
    return (
        <div className="grid-container --two-columns">
            <div>test</div>
            <div>text</div>
        </div>
    );
};

export default Grid;
