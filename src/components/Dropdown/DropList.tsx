import React from "react";
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    radio?:boolean,
    icon?:string,
    isInput?:boolean

};

export const DropList = ({
    title,
    radio=false,
    icon,
    isInput=true
              }: DropListProps) => {
    return (
        <li>
            <label className={`drop-items ${!isInput?"fit":""}`}>               
                <div className="title">{icon?<> <Icon label={icon||""}/>{`  `}</>:null}{title}</div>
               {
                   isInput? <input type={radio?"radio":"checkbox"} />:null
               }
            </label>
        </li>
    );
};

