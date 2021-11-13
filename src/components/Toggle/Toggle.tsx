import React from "react";
import Icon from "../Icon";
import Alert from "../Alert";
import Badge from "../Badge";
import "./toggle.scss";

export interface ToggleProps {
    on: boolean,
    disabled: boolean,
    onClick: any;
};

const Toggle = ({
                    on = false,
                    disabled = true,
                    onClick
                }: ToggleProps) => {

    const fake = function(){}

    return (

        <label className={"toggle"}>
            { onClick && <input type="checkbox" disabled={disabled} checked={on} onClick={onClick} />}
            { !onClick && <input type="checkbox" disabled={disabled} checked={on} onClick={() => fake()} />}
            <span className="slider round"></span>
        </label>

    );
};

export default Toggle;
