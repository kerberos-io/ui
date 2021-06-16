import React from "react";
import "./navigation.scss";

export interface NavigationProps  {
    children?:any;
};

const Navigation = ({
                     children,
                 }: NavigationProps) => {

    return (
        <nav className="side-navigation">
            {children}
        </nav>);
};

export default Navigation;
