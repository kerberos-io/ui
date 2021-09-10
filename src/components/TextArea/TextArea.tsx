import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import "./textarea.scss";

export interface TextAreaProps {
    label?: string;
    placeholder?: string;
    value?: string;
    error?: string;
    rows?: number;
    readonly?: boolean;
    readonlyLabel?: boolean;
    disabled?: boolean;
    layout?: "form" | "controlbar";
    onBlur?: (
        event:React.FormEvent<HTMLTextAreaElement>
    ) => void;
    onChange?: (
        event:React.FormEvent<HTMLTextAreaElement>
    ) => void;
    onClick?: (
    event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
    ) => void;
}

export const TextArea = ({
                 label,
                 placeholder,
                 value,
                 rows = 10,
                 error = "",
                 readonly = false,
                 readonlyLabel = false,
                 disabled = false,
                 layout = "form",
                 onChange,
                 onClick,
                 ...rest

}: TextAreaProps) => {

  return (
        <label className={`generic-input ${error && "error"}`}>
          <div className="input-labels">
              { error === "" && <>
               <p>{label} {label && readonly && readonlyLabel && <i>(readonly)</i>}</p>
              </> }
              { error !== "" && <>
                  <p>{label} <i>({error})</i></p>
              </> }
          </div>
          <textarea rows={rows} {...rest} readOnly={readonly} disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick}></textarea>
        </label>
  );
};

