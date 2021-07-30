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

    const inputRef = React.useRef() as any;
    const [ icon, setIcon ]=React.useState("eye-crossed");

    const handleClickShowPassword=(event:any)=>{
      event.preventDefault()
      const input = inputRef.current
      input["type"]==="text" ?
       (input["type"]="password" ,setIcon("eye-crossed"))
       :(input["type"]="text",setIcon("activity"))
    }

    const handleKeyDown=(e:any)=>{
      if(e.key==="Enter"){
          e.preventDefault()       
        }
    }

    const eyeEvents = {
      onClick:handleClickShowPassword,
      onKeyDown:handleKeyDown
    }
    
  return (
        <label className={`generic-input ${type==="button"?"buttonize":""}`}>
          <div className="input-labels">
               <p>{label} {readonly ?<i>(readonly)</i>:null}</p>
               {
                 hint?<p className="hint">{hint}</p>:null
               }
          </div>
          <div className={`input-bar ${!iconright?"fit-right":""}`}>
                <div className={`input-box ${iconleft?"":"come-near"}`}>
                  {iconleft ? (
                    <div className="icon-left">
                      <Icon label={`${iconleft}`} />
                    </div>
                  ) : null}
                  <input ref={inputRef} onKeyDown={handleKeyDown} {...rest} type={type} className="input"  readOnly={readonly} disabled={disabled}  placeholder={placeholder} value={value} onChange={onChange} onClick={onClick}/>
                </div>
            
                {iconright ? (
                   iconright === "activity" ?
                    <span {...eyeEvents}>
                      <Button  icon={icon} label="" type="outlined"  />
                    </span>
                     :<div className={`icon-right ${seperate ?"seperate":""}`}>
                        <Icon label={`${iconright}`} />
                      </div>                    
                ) :<span className="expand"></span>}
          </div>
        </label>
  );
};

