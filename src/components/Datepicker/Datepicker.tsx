import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

import "./datepicker.scss";

export interface DatepickerProps {
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

export const Datepicker = ({
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

}: DatepickerProps) => {

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
    
    const handleChange = (newValue: any) => {
      console.log(newValue)
    };

  return (
        
    <LocalizationProvider dateAdapter={AdapterMoment}>
<MobileDateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
  );
};

