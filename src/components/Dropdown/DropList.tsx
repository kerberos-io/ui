import React from "react";
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    value:string,
    radio?:boolean,
    icon?:string,
    checked?: boolean,
    onChange?: any
};

export const DropList = ({
    title,
    value,
    radio=false,
    icon,
    checked=false,
    onChange,}: DropListProps) => {
    return (
        <li>
            <label className={`drop-item`}>
                <div className="title">
                    { icon && <>
                        <Icon label={icon||""}/>
                        {`  `}
                    </> }
                    {title}
                </div>
               <input type={radio ? "radio" : "checkbox"} checked={checked} value={value} onChange={onChange} />
            </label>
        </li>
    );
};

