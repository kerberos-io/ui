import React from "react";
import Icon from "../Icon";
import Button from "../Button";
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
  type:string,
  onChange?: (
    event:React.FormEvent<HTMLInputElement> 
  ) => void;
  onClick?: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;

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
                 onChange,
                 onClick,
                 ...rest

}: InputProps) => {
  const inputRef = React.useRef() as any
    const handlelickShowPassword=()=>{
      const input = inputRef.current
      input["type"]==="text" ? input["type"]="password" :input["type"]="text"
    }
  return (
        <label className={`generic-input ${type==="button"?"buttonize":""}`}>
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
                  <input ref={inputRef} {...rest} type={type} className="input"  readOnly={readonly} disabled={disabled}  placeholder={placeholder} value={value} onChange={onChange} onClick={onClick}/>
                </div>
            
                {iconright ? (
                   iconright==="activity"?<Button icon="activity" label="" type="outlined" onClick={handlelickShowPassword}/>:
                    <div className={`icon-right ${seperate ?"seperate":""}`}>
                     <Icon label={`${iconright}`} />
                    </div>
                    
                ) :<span className="expand"></span>}
          </div>
        </label>
  );
};

