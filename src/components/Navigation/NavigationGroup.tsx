import React from "react";
import "./navigation.scss";

export interface NavigationGroupProps  {
    children?:any;
};

const NavigationGroup = ({
                        children,
                    }: NavigationGroupProps) => {

    return <ul className="nav">{children}</ul>;
};

export default NavigationGroup;
