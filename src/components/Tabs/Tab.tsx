import React from "react";
import "./tabs.scss";

export interface TabProps {
    onClick: any,
    label: any,
    value: any,
    icon: any,
    active: boolean,
};

export const Tab = ({
                  onClick,
                  label = "",
                  value = "",
                  icon = "",
                  active = false,
              }: TabProps) => {

    return (
        <div className={`tab ${active ? "active" : ""}`} onClick={() => onClick(value)}>
            { icon }
            <span>{label}</span>
        </div>
    );
};
