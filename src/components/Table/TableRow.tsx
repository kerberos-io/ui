import React from "react";
import "./table.scss";
import { TableCell } from "./TableCell";

export interface TableRowProps {
  id: string,
  columnName?: string,
  headercells?: any[];
  bodycells?: any[];
}

export const TableRow = ({ id, columnName, headercells, bodycells }: TableRowProps) => {
  return (
    <>
      {headercells ? (
        <tr key={id} className="table-row">
          {headercells.map((cell, index) => (
            <th key={id + "-" + index}>
              <TableCell>{cell}</TableCell>
            </th>
          ))}
        </tr>
      ) : null}
      
      {bodycells ? (
        <tr key={id} className="table-row">
          {bodycells.map((cell,index) => (
            <td key={id + "-" + index} >
              <TableCell>{cell}</TableCell>
            </td>
          ))}
        </tr>
      ) : null}
    </>
  );
};
