import React from "react";
import "./main.scss";

export interface MainProps  {
    children?:any;
};

const Main = ({
             children,
         }: MainProps) => {
    return ( <div className="main">
            {children}
        </div>);
};

export default Main;
