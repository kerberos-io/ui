import React from "react";
import "./infobar.scss"
import Icon from "../Icon";

export interface InfoBarProps{
    type:string,
    message:string,
    showClose: boolean,
    onClick?:(
        event:React.MouseEvent<HTMLDivElement,MouseEvent>
    )=>void
}

const InfoBar = ({type,message,onClick, showClose = false}:InfoBarProps)=>{
    return(
        <div className={`${type} message`} >
            <div>
                { type === "info" && <Icon label="info" /> }
                { type === "success" && <Icon label="verify" /> }
                { type === "alert" && <Icon label="cross" /> }
                { type === "loading" && <div className="lds-ripple"><div></div><div></div></div> }
                <span className="description">{message}</span>
            </div>
            { showClose && <div onClick={onClick}>
                <Icon label="cross" />
            </div> }
        </div>
    )
}

export default InfoBar
