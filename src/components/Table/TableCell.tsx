import React from "react";
import "./table.scss"

export interface TableCellProps {
  children: any;
}
export const TableCell = ({ children }: TableCellProps) => {
  return <div className="table-cell">{children}</div>;
};
