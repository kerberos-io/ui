import React from "react";
import "./table.scss";

export interface TableProps {
  children: any;
}

export const Table = ({
  children,
}: TableProps) => {
  return (
    <div className="table-container">
      <table>
        {children}
      </table>
    </div>
  );
};
