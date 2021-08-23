import React from "react";
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    value:string,
    radio?:boolean,
    icon?:string,
    isInput?:boolean,
    checked?: boolean,
    onChange?: any
};

export const DropList = ({
    title,
    value,
    radio=false,
    icon,
    isInput=true,
    checked=false,
    onChange,}: DropListProps) => {
    return (
        <li>
            <label className={`drop-items ${!isInput?"fit":""}`}>               
                <div className="title">
                    { icon && <>
                        <Icon label={icon||""}/>
                        {`  `}
                    </> }
                    {title}
                </div>
               {
                   isInput && <input type={radio ? "radio" : "checkbox"} checked={checked} value={value} onChange={onChange} />
               }
            </label>
        </li>
    );
};

