import React from "react";
import Icon from "../Icon";
import "./infobar.scss";

export interface InfoBarProps  {
    image: string;
    title: string;
    description?: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const InfoBar = ({
                image,
                title,
                description,
                onClick,
            }: InfoBarProps) => {
    return (
        <div className={"info-bar"}>
            <div className={"avatar"}>
                <Icon label={image}></Icon>
            </div>
            <div className={"description"}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoBar;
