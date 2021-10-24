import React from "react";
import "./table.scss";
import { TableCell } from "./TableCell";
const { useState } = React;

export interface TableRowProps {
  id: string,
  columnName?: string,
  headercells?: any[];
  bodycells?: any[];
  details?: any;
  showDetails?: boolean;
}

export const TableRow = ({ id, columnName, headercells, bodycells, details, showDetails }: TableRowProps) => {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(value => !value);

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
            <td key={id + "-" + index} onClick={toggleShow}>
              <TableCell>{cell}</TableCell>
            </td>
          ))}
        </tr>
      ) : null}
      {bodycells && details && show ? (
          <tr key={id+"-detail"} className="table-row details">
            <td colSpan={bodycells.length}>
              {details}
            </td>
          </tr>
      ) : null}
    </>
  );
};
