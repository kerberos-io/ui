import React from "react";
import Icon from "../Icon/Icon";
import "./navigation.scss";
import { Link } from 'react-router-dom';

export interface NavigationItemProps  {
    title:string;
    icon:string;
    link?:any;
    active?:boolean;
};

const NavigationItem = ({
                        title,
                        icon,
                        link,
                        active = false,
                    }: NavigationItemProps) => {

    return (
        <li>
            <Link to={link}>
                <Icon label={icon}/>
                <span>{title}</span>
            </Link>
        </li>);
};

export default NavigationItem;
