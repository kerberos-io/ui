import React from "react";
import ReactTooltip from 'react-tooltip';
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

    const truncate = (fullStr:any, strLen:any, separator:any) => {
        if (fullStr.length <= strLen) return fullStr;

        separator = separator || '...';

        var sepLen = separator.length,
            charsToShow = strLen - sepLen,
            frontChars = Math.ceil(charsToShow/2),
            backChars = Math.floor(charsToShow/2);

        return fullStr.substr(0, frontChars) +
            separator +
            fullStr.substr(fullStr.length - backChars);
    };

    const fieldMaxLength = 20;
    return (
        <li>
            <label className={`drop-item`}>
                <div className="title">
                    { icon && <Icon label={icon||""}/> }
                    { title && title.length > fieldMaxLength && <>
                        <span data-tip={title}>{truncate(title, fieldMaxLength - 3, "..")}</span>
                        <ReactTooltip place={"top"} classNane={"tooltip-custom"} />
                    </> }
                    { title && title.length <= fieldMaxLength && <span>{title}</span> }
                </div>
               <input type={radio ? "radio" : "checkbox"} checked={checked} value={value} onChange={onChange} />
            </label>
        </li>
    );
};

