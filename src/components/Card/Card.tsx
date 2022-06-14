import React from "react";
import Icon from "../Icon";
import "./card.scss";

export interface CardProps  {
    label: string;
    icon: string;
    title: string;
    subtitle: string;
    footer: string;
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Card = ({
                onClick,
                label,
                title = "",
                subtitle = "",
                footer = "",
                type = "neutral",
                icon,
            }: CardProps) => {
    return (
        <div className="card">
            <div className="title">
                <div className="description">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className="image">
                    <Icon label={icon}></Icon>
                </div>
            </div>
            <div className="footer">
                <div className="text">{footer}</div>
            </div>
        </div>
    );
};

export default Card;
