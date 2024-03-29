import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import "./input.scss";

export interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    error?: string;
    readonly?: boolean;
    readonlyLabel?: boolean;
    disabled?: boolean;
    hint?: string;
    iconleft?: string;
    iconright?: string;
    seperate?: boolean;
    noPadding?: boolean;
    layout?: "form" | "controlbar";
    type?:string,
    onBlur?: (
        event:React.FormEvent<HTMLInputElement>
    ) => void;
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
                 error = "",
                 readonly = false,
                 readonlyLabel = false,
                 disabled = false,
                 hint,
                 layout = "form",
                 iconleft,
                 iconright,
                 seperate,
                 noPadding=false,
                 type,
                 onChange,
                 onClick,
                 ...rest

}: InputProps) => {

    const inputRef = React.useRef() as any;
    const [ icon, setIcon ]=React.useState("eye-crossed");

    const handleClickShowPassword=(event:any)=>{
      event.preventDefault()
      const input = inputRef.current
      input["type"]==="text" ?
       (input["type"]="password" ,setIcon("eye-crossed"))
       :(input["type"]="text",setIcon("activity"))
    }

    const eyeEvents = {
      onClick:handleClickShowPassword,
    }
    
  return (
        <label className={`generic-input ${type==="button"?"buttonize":""} ${error && "error"}`}>
          <div className="input-labels">
              { error === "" && <>
               <p>{label} {label && readonly && readonlyLabel && <i>(readonly)</i>}</p>
               { hint && <p className="hint">{hint}</p> }
              </> }

              { error !== "" && <>
                  <p>{label} <i>({error})</i></p>
                  { hint !== "" && <p className="hint">{hint}</p> }
              </> }
          </div>
          <div className={`input-bar ${noPadding?"no-padding":""} ${disabled?"disabled":""} ${!iconright?"fit-right":""} ${layout}`}>
                <div className={`input-box ${iconleft?"":"come-near"}`}>
                  {iconleft && 
                    <div className="icon-left">
                      <Icon label={`${iconleft}`} />
                    </div> }
                    <input ref={inputRef} {...rest} type={type} className={`input ${disabled?"disabled":""}`} readOnly={readonly} disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick}/>
                </div>
            
                {iconright && (
                   iconright === "activity" ?
                    <span {...eyeEvents}>
                      <Button  icon={icon} label="" type="outlined"  />
                    </span> : <div className={`icon-right ${seperate ?"seperate":""}`}>
                        <Icon label={`${iconright}`} />
                      </div>
                )}
          </div>
        </label>
  );
};

