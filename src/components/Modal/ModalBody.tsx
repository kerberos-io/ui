import React from "react";
import Icon from "../Icon";
import "./modal.scss";

export interface ModalBodyProps  {
    children: any
};

export const ModalBody = ({ children }: ModalBodyProps) => {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
};

