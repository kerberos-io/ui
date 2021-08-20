import React from "react";
import Icon from "../Icon";
import "./modal.scss";

export interface ModalBodyProps  {
    children: any
};

export const ModalBody = ({ children }: ModalBodyProps) => {
    return (
        <div class="modal-body">
            {children}
        </div>
    );
};

