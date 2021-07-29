import React from "react";
import "./controlbar.scss"
export interface FilterSearchProps{
  children:any
}

export const  FilterSearch = ({children}: FilterSearchProps) =>{
    return(
        <div className="search-input">
          {children}
        </div>
    )
}