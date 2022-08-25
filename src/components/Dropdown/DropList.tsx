import React from "react";
import ReactTooltip from 'react-tooltip-rc';
import Icon from "../Icon";
import "./dropdown.scss";

export interface DropListProps  {
    title:string,
    value:string,
    radio?:boolean,
    icon?:string,
    checked?: boolean,
    onChange?: any,
    shorten?:boolean,
    shortenType?:string,
    shortenMaxLength?:number
};

export const DropList = ({
    title,
    value,
    radio=false,
    icon,
    checked=false,
    shorten=true,
    shortenType="end",
    shortenMaxLength=15,
    onChange,}: DropListProps) => {

    const truncate = (fullStr:any, strLen:any, separator:any) => {
        if (fullStr.length <= strLen) return fullStr;

        separator = separator || '...';

        if(shortenType === "middle") {
            var sepLen = separator.length,
                charsToShow = strLen - sepLen,
                frontChars = Math.ceil(charsToShow / 2),
                backChars = Math.floor(charsToShow / 2);

            return fullStr.substr(0, frontChars) +
                separator +
                fullStr.substr(fullStr.length - backChars);
        } else if(shortenType === "end") {
            return fullStr.substr(0, strLen) + separator
        }
    };

    let fieldMaxLength = Infinity;
    if (shorten) {
        fieldMaxLength = shortenMaxLength;
    }
    return (
        <li>
            <label className={`drop-item`}>
                <div className="title">
                    { icon && <Icon label={icon||""}/> }
                    { title && title.length > fieldMaxLength && <>
                        <span data-tip={title}>{truncate(title, fieldMaxLength - 3, "..")}</span>
                        <ReactTooltip place={"top"} className={"tooltip-custom"} />
                    </> }
                    { title && title.length <= fieldMaxLength && <span>{title}</span> }
                </div>
               <input type={radio ? "radio" : "checkbox"} checked={checked} value={value} onChange={onChange} />
            </label>
        </li>
    );
};

