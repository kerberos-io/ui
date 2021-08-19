import React from "react";
import Icon from "../Icon/Icon";
import "./navigation.scss";
import { NavLink } from 'react-router-dom';

export interface NavigationItemProps  {
    title:string;
    icon:string;
    link?:any;
    external?:boolean;
    active?:boolean;
};

const NavigationItem = ({
                        title,
                        icon,
                        link,
                        external = false,
                        active = false,
                    }: NavigationItemProps) => {
    return (
        <li>
            { !external ? <NavLink to={link} activeClassName="is-active">
                <Icon label={icon}/>
                <span>{title}</span>
            </NavLink> : <a href={link} target={"_blank"}>
                <Icon label={icon}/>
                <span>{title}</span>
            </a> }
        </li>);
};

export default NavigationItem;
