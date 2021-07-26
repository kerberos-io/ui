import React from "react";
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    radio?:boolean,
    icon?:string

};

export const DropList = ({
    title,
    radio=false,
    icon
              }: DropListProps) => {
    return (
        <li>
            <label className="items">
               
                <div className="title">{icon?<> <Icon label={icon||""}/>{`  `}</>:null}{title}</div>
                <input type={radio?"radio":"checkbox"} />
            </label>
        </li>
    );
};

