import React from "react";
import Icon from "../Icon/Icon";
import "./navigation.scss";

export interface NavigationItemProps  {
    title:string;
    icon:string;
    active?:boolean;
};

const NavigationItem = ({
                        title,
                        icon,
                        active = false,
                    }: NavigationItemProps) => {

    return (
        <li>
            <a className={`${active ? 'is-active' : ''}`}>
                <Icon label={icon}/>
                <span>{title}</span>
            </a>
        </li>);
};

export default NavigationItem;
