import React from "react";
import "./controlbar.scss"
export interface FilterSortProps{
    children:any
}

export const FilterSort = ({children}:FilterSortProps) =>{
    return(
        <div className="sort-filter">
            {children}
      </div>
    )
}