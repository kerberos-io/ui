import React from "react";
import "./tabs.scss";

export interface TabsProps {
    onClick: any,
    options: any[],
};

const Tabs = ({
            onClick,
            options = [],
        }: TabsProps) => {

    return (
        <>
            { options.map(o =>
            <div className={`tab ${o.active ? "active" : ""}`} onClick={() => onClick(o.value)}>
                { o.icon }
                <span>{o.label}</span>
            </div>)}
        </>
    );
};

export default Tabs;
