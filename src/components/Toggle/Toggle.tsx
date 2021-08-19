import React from "react";
import Icon from "../Icon";
import Alert from "../Alert";
import Badge from "../Badge";
import "./toggle.scss";

export interface ToggleProps  {
    on:boolean,
    aura?:boolean,
    status?:string,
    onClick:(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
};

const Toggle = ({
    on,
    aura=false,
    status="hub",
    onClick}:ToggleProps) => {
    return (
        <div className={`sweet-toggling ${on?"toggle-on":"toggle-off"} ${aura?"":"aura-off"}`} onClick={onClick}>
            <Badge status={status} title="" blink={false} aura={aura}/>
        </div>
    );
};

export default Toggle;
