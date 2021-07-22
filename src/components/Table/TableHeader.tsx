import React from "react";
import "./table.scss";

export interface TableHeaderProps {
  children: any;
}
export const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className="table-header">{children}</thead>;
};
