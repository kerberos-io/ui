import React from "react";
import Icon from "../Icon/Icon";
import "./navigation.scss";
import { NavLink } from 'react-router-dom';

export interface NavigationItemProps  {
    title:string;
    icon:string;
    link?:string;
    active?:boolean;
};

const NavigationItem = ({
                        title,
                        icon,
                        link,
                        active = false,
                    }: NavigationItemProps) => {

    // @ts-ignore
    return (
        <li>
            <NavLink to={"link"} activeClassName="is-active" >
                <Icon label={icon}/>
                <span>{title}</span>
            </NavLink>
        </li>);
};

export default NavigationItem;
