import React from "react";
import "./table.scss";

export interface TableBodyProps {
  children: any;
}

export const TableBody = ({ children }: TableBodyProps) => {
  return <tbody className="table-body">{children}</tbody>;
};
