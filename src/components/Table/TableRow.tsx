import React from "react";
import "./table.scss";
import { TableCell } from "./TableCell";

export interface TableRowProps {
  headercells?: any[];
  bodycells?: any[];
}

export const TableRow = ({ headercells, bodycells }: TableRowProps) => {
  return (
    <>
      {headercells ? (
        <tr className="table-row">
          {headercells.map((cell) => (
            <th>
              <TableCell>{cell}</TableCell>
            </th>
          ))}
        </tr>
      ) : null}
      
      {bodycells ? (
        <tr className="table-row">
          {bodycells.map((cell) => (
            <td>
              <TableCell>{cell}</TableCell>
            </td>
          ))}
        </tr>
      ) : null}
    </>
  );
};
