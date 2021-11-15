import React from "react";
import "./tabs.scss";

export interface TabsProps {
    children?:any;
};

export const Tabs = ({
            children,
        }: TabsProps) => {
    return <>
        {children}
    </>
};
