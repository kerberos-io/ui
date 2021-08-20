import React from "react";
import Icon from "../Icon";
import "./modal.scss";

export interface ModalHeaderProps  {
    title:string,
    subtitle:string,
    onClose?: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
};

export const ModalHeader = ({
    title,
    subtitle,
    onClose }: ModalHeaderProps) => {
    return (
        <div className={"modal-header"}>
            <div className="title">
                {title}
                <span>{subtitle}</span>
            </div>
            <div className="close" onClick={onClose} tabIndex={0}>
                <Icon label={"cross"}></Icon>
            </div>
        </div>
    );
};

