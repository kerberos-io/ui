import React from "react";
import "./table.scss";
export interface TableHeaderProps{
    headers:string[]
}
export const TableHeader =({headers}:TableHeaderProps)=>{
    return(
        <tr className="table-row">
            {
                headers.map(header =><th>
                                        <div className="th-box">
                                            <p>{header}</p>
                                        </div>
                                    </th>)
            }
            
        </tr>
    )
}
