import React from "react";
import "./setupbox.scss"
import Badge from "../Badge";
import Button from "../Button";

export interface SetupBoxProps {
    dashed?: boolean,
    header: string,
    text: string,
    btnicon: string,
    btnlabel: string
    button?: any
}

const SetupBox = ({
                      dashed = false,
                      header = "",
                      text = "",
                      btnicon = "",
                      btnlabel = "",
                      button
                  }: SetupBoxProps) => {
    return (
        <div className={`setup-box ${dashed ? " dashed" : ""}`}>
            <div className="info">
                <h3>{header}</h3>
                <p className="item">{text}</p>
            </div>
            { btnlabel !== "" && <Button icon={btnicon} label={btnlabel} type="default"/> }
            { btnlabel === "" && button}
        </div>
    )
}

export default SetupBox

