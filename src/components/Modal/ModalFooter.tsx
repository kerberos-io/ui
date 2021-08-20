import React from "react";
import Icon from "../Icon";
import "./modal.scss";

export interface ModalFooterProps  {
    left?:any,
    right?:any,
};

export const ModalFooter = ({
    left,
    right }: ModalFooterProps) => {
    return (
        <div className="modal-footer">
            <div className="left">
                {left}
            </div>
            <div className="right">
                {right}
            </div>
        </div>
    );
};

