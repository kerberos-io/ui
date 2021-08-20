import React from "react";
import Icon from "../Icon";
import "./button.scss";

export interface ButtonProps  {
    label: string;
    icon: string;
    buttonType?: "button" | "submit" | "reset";
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Button = ({
                onClick,
                label,
                buttonType = "button",
                type = "neutral",
                icon,
            }: ButtonProps) => {
    return (
        <button type={buttonType} onClick={onClick} className={`button ${type}`}>
            <Icon label={icon}/>
            { label && <span className="text">{label}</span> }
        </button>
    );
};

export default Button;
