import React from "react";
import "./controlbar.scss"
export interface FilterSiteProps{
  children:any
}

export const FilterSite = ({children}:FilterSiteProps) =>{
    return(
        <div className="location-button">
          {children}
      </div>
    )
}