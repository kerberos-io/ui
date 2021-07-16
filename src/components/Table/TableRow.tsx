import React from "react";
import "./table.scss";
import { TableCell } from "./TableCell";

export interface TableRowProps  {
    cells:any[]
};


export const TableRow = ({
    cells
              }: TableRowProps) => {
    return (
        <tr className="table-row">
            {cells.map(cell =><td><TableCell>{cell}</TableCell></td>)}
        </tr>
    );
};

