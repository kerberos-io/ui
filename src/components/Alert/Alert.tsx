import React from "react";
import Icon from "../Icon";
import Ellipse from "../Ellipse";
import "./alert.scss"

export  interface ALertProps{
    status:string,
    platter?:boolean,
    notify?:boolean,
    blink?:boolean,
    onClick?:(
        event:React.MouseEvent<HTMLDivElement,MouseEvent>
    )=>void

}
const ALert = ({
    status,
    platter,
    notify,
    blink,
    onClick
}:ALertProps) =>{
    return(
        <div onClick={onClick} className={`alert ${platter?"with-platter":""}`}>
            {
            notify?<Ellipse status={status} aura blink={blink}/>:null
            }
            <Icon label="alerts" />
        </div>
    )
}

export default ALert