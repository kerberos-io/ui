import React from "react";
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    radio?:boolean,
    icon?:string,
    isInput?:boolean,
    rounded?:boolean
};

export const DropList = ({
    title,
    radio=false,
    icon,
    isInput=true,
    rounded=false
    
              }: DropListProps) => {
    return (
        <li >
            <label  className={`drop-items ${!isInput?"fit":""}`}>               
                <div  className="title">{icon?<> <Icon label={icon||""}/>{`  `}</>:null}{title}</div>
               {
                   isInput?<div className={`checkbox ${rounded?"rounded":""} `}><input name={`${radio?"select-one-choise":""}`} onClick={(e)=> e.stopPropagation()}   type={`${radio?"radio":"checkbox"}`} /></div> :null
               }
            </label>
        </li>
    );
};

