import React from "react";
import Icon from "../Icon";
import "./button.scss";

export interface ButtonProps  {
    label: string;
    icon: string;
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Button = ({
                onClick,
                label,
                type = "neutral",
                icon,
            }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`button ${type}`}>
            <Icon label={icon}/>
            <span className="text">{label}</span>
        </button>
    );
};

export default Button;