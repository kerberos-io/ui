import React from "react";
import "./controlbar.scss"
export interface FilterDisplayProps{
  children:any
}

export const FilterDisplay = ({children}:FilterDisplayProps) =>{
    return(
        <div className="display-group">
          {children}
        </div>
    )
}