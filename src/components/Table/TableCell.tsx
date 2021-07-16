import React  from "react";
import Badge from "../Badge";
export interface TableCellProps{
    children:any
}
export const TableCell = ({children}:TableCellProps) =>{
    return (
        <div className="td-box">
            {children}
         </div>
    )
}