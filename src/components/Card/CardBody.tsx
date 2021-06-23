import React from "react";
import Icon from "../Icon";
import "./card.scss";

export interface CardBodyProps  {
    label: string;
    icon: string;
    type?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const CardBody = ({
                  onClick,
                  label,
                  type = "neutral",
                  icon,
              }: CardBodyProps) => {
    return (
        <div>My Card</div>
    );
};

export default CardBody;
