import React from "react";
import Icon from "../Icon";
import Ellipse from "../Ellipse";
import "./alert.scss"

export  interface ALertProps{
    platter?:boolean,
    notify?:boolean,
    blink?:boolean

}
const ALert = ({
    platter,
    notify,
    blink
}:ALertProps) =>{
    return(
        <div className={`alert ${platter?"with-platter":""}`}>
            {
            notify?<Ellipse status="hub" aura blink={blink}/>:null
            }
            <Icon label="alerts" />
        </div>
    )
}

export default ALert