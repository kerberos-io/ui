import React from "react";
import Icon from "../Icon";
import "./modal.scss";

export interface ModalHeaderProps  {
    title:string,
    subtitle:string,
    onClose?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

export const ModalHeader = ({
    title,
    subtitle,
    onClose }: ModalHeaderProps) => {
    return (
        <div className={"modal-header"}>
            <div class="title">
                {title}
                <span>{subtitle}</span>
            </div>
            <div className="close" onclick={onClose} tabindex="0">
                <Icon label={"cross"}></Icon>
            </div>
        </div>
    );
};

