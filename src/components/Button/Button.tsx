import React from "react";
import Icon from "../Icon";
import "./button.scss";

export interface ButtonProps  {
    label: string;
    icon: string;
    buttonType?: "button" | "submit" | "reset";
    type?: string;
    disabled?: boolean;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Button = ({
                onClick,
                label,
                buttonType = "button",
                type = "neutral",
                disabled = false,
                icon,
            }: ButtonProps) => {
    return (
        <button type={buttonType} disabled={disabled} onClick={onClick} className={`button ${type}`}>
            <Icon label={icon}/>
            { label && <span className="text">{label}</span> }
        </button>
    );
};

export default Button;
