import React from "react";
import Icon from "../Icon";
import "./footer.scss";

export interface FooterProps  {
    label: string;
    icon: string;
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Footer = ({
                onClick,
                label,
                type = "neutral",
                icon,
            }: FooterProps) => {
    return (
        <button onClick={onClick} className={`button ${type}`}>
            <Icon label={icon}/>
            <span className="text">{label}</span>
        </button>
    );
};

export default Footer;
