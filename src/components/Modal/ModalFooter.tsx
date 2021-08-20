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
        <div class="modal-footer">
            <div class="left">
                {left}
            </div>
            <div class="right">
                {right}
            </div>
        </div>
    );
};

