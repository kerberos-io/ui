import React from "react";
import Icon from "../Icon";
import "./card.scss";

export interface CardProps  {
    label: string;
    icon: string;
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Card = ({
                onClick,
                label,
                type = "neutral",
                icon,
            }: CardProps) => {
    return (
        <div>My Card</div>
    );
};

export default Card;
