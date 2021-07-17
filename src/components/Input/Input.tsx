import React from "react";
import Icon from "../Icon";
import "./input.scss";

export interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  readonly: boolean;

  titleleft?: string;
  hint?: string;
  iconleft?: string;
  iconright?: string;
  seperate?: boolean;
}

const Input = ({
                 label,
                 placeholder,
                 value,
                 readonly = false,

                 titleleft,
                 hint,
                 iconleft,
                 iconright,
                 seperate,
}: InputProps) => {

  return (<div class="input">
        <label>
            {label} {readonly ? "(readonly)" : ""}
            <input type="text" disabled={readonly} class={{"readonly":readonly}} placeholder={placeholder} value={value} />
        </label>
      </div>
  );

  /*return (
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
  );*/
};

export default Input;
