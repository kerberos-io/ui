import React from "react";
import Icon from "../Icon";
import "./inputbox.scss";
export interface InputBoxProps {
  titleleft?: string;
  hint?: string;
  iconleft?: string;
  iconright?: string;
  seperate?: boolean;
  placeholder?: string;
}

const InputBox = ({
  titleleft,
  hint,
  iconleft,
  iconright,
  seperate,
  placeholder,
}: InputBoxProps) => {
  return (
    <div className="input-container">
      <div className="input-box">
        {titleleft || hint ? (
          <div className="input-title">
            <p>{titleleft}</p>
            <p>{hint}</p>
          </div>
        ) : null}

        <div className="input-bar">
          {iconleft ? (
            <div className="input-icon-left">
              <Icon label={`${iconleft}`} />
            </div>
          ) : null}

          <div className="input-itself">
            <input placeholder={placeholder} />
          </div>
          {iconright ? (
            <div className={seperate ? "seperate" : "input-icon-right"}>
              <Icon label={`${iconright}`} />
            </div>
          ) : <span className="expand"></span>}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
