import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import  { Table,TableProps } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import Badge from "../Badge";
import Ellipse from "../Ellipse";
import Icon from "../Icon";
import Button from "../Button";
export default {
    title: "Components/Table",
    component: Table,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;
const cellList = [
    <Badge status="success" />,
    <>
     <Ellipse status="alert"/> <b>rh-first</b>
    </>,
    <>
        <b>Prague</b><p>Czechia</p>
    </>,
    <p>23h 5:20</p>,
    <>
    <Icon label="opensource-sm"/> <span className="version">2.8.0</span>
    </>,
    <Button type="outlined" icon="search" label=""/>
]
const rowsdata=[
        {cells:cellList},
        {cells:cellList},
        {cells:cellList}
]

const headerList = ["status","name","site","uptime","version","controls"]


export const TableStory = ()=><Table headers={headerList} rowlist={rowsdata}/>
export const Header = ()=><Table headers={headerList}/>
export const OneRow = ()=><Table  rowlist={[{cells:cellList}]}/>
export const Cell = ()=><TableCell> 
                             <Ellipse status="alert"/> <b>rh-first</b>
                        </TableCell>
