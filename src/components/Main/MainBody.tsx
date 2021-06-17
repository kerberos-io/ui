import React from "react";
import "./main.scss";

export interface MainBodyProps  {
    children?:any;
};

const MainBody = ({
                  children,
              }: MainBodyProps) => {

    return ( <div className="main-body">
        {children}
    </div>);
};

export default MainBody;
