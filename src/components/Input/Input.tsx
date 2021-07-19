import React from "react";
import Icon from "../Icon";
import "./input.scss";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  disabled?: boolean;

  hint?: string;
  iconleft?: string;
  iconright?: string;
  seperate?: boolean;
  type:string

}

export const Input = ({
                 label,
                 placeholder,
                 value,
                 readonly = false,
                 disabled = false,
                 hint,
                 iconleft,
                 iconright,
                 seperate,
                 type,
                 ...rest

}: InputProps) => {

  return (
        <label>
          <div className="input-labels">
               <p>{label} {readonly ?<i>(readonly)</i>:null}</p>
               {
                 hint?<p className="hint">{hint}</p>:null
               }
          </div>
          <div className={`input-bar ${type==="submit"?"submit":""}`}>
                <div className={`input-box ${iconleft?"":"come-near"}`}>
                  {iconleft ? (
                    <div className="icon-left">
                      <Icon label={`${iconleft}`} />
                    </div>
                  ) : null}
                  <input {...rest} type={type} className="input"  readOnly={readonly} disabled={disabled}  placeholder={placeholder} value={value} />
                </div>
            
                {iconright ? (
                    <div className={`icon-right ${seperate ?"seperate":""}`}>
                      <Icon label={`${iconright}`} />
                    </div>
                ) :<span className="expand"></span>}
          </div>
        </label>
  );
};

