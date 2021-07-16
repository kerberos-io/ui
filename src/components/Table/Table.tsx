import React, { Children } from "react";
import Icon from "../Icon";
import "./table.scss";
import Badge from "../Badge";
import Ellipse from "../Ellipse";
import Button from "../Button";
import {TableRow} from "./TableRow";
import {TableHeader} from "./TableHeader";

export interface TableProps  {
    headers?:string[]|any,
    rowlist?:{
        cells:any[]
    }[]|any
};

export const Table = ({
                headers,
                rowlist
            }: TableProps) => {
    return (
        <div className="table">
            <table>
                {
                    headers?<TableHeader headers={headers} />:null
                } 
                {
                   rowlist? rowlist.map((row:any)=><TableRow cells={row.cells} />):null
                }
            </table>
        </div>
    );
};

