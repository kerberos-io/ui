import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Table, TableProps } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import Badge from "../Badge";
import Ellipse from "../Ellipse";
import Icon from "../Icon";
import Button from "../Button";
export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const cellList1 = [
    <Badge title="live" status="success" />,
    <>
      <Ellipse status="info" /> <b>rh-first</b>
    </>,
    <>
      <b>Prague</b>
      <p>Czechia</p>
    </>,
    <p>23h 5:20</p>,
    <>
      <Icon label="opensource-sm" /> <span className="version">2.8.0</span>
    </>,
    <Button type="outlined" icon="search" label="" />,
];
const cellList2 = [
    <Badge status="alert" title="offline" />,
    <>
      <Ellipse status="oss-darker" /> <p>rh-second</p>
    </>,
    <>
      <p>Český</p> <p> Krumlov Czechia</p>
    </>,
    <p>—</p>,
    <>
      <Icon label="opensource-sm" /> <span className="version">2.8.0</span>
    </>,
    <>
      <Button type="outlined" label="" icon="trush" />
      <Button type="outlined" icon="search" label="" />
    </>,
];
const cellList3 = [
    <Badge status="warning" title="update" />,
    <>
      <Ellipse status="success" /> <p>rorschach-first</p>
    </>,
    <>
      <b>Prague</b>
      <p>Czechia</p>
    </>,
    <p>304d 22h 48:04</p>,
    <div className="enterprise-version">
      <Icon label="enterprise-sm" /> <span className="version">2.8.0</span>
    </div>,
    <Button type="outlined" icon="search" label="" />,
];

const headerList = ["status", "name", "site", "uptime", "version", "controls"];

export const Default = () => (
  <Table>
    <TableHeader>
      <TableRow headercells={["status", "name", "site", "uptime", "version", "controls"]} />
    </TableHeader>
    <TableBody>
      <TableRow bodycells={cellList1} />
      <TableRow bodycells={cellList2} />
      <TableRow bodycells={cellList3} />
    </TableBody>
  </Table>
);

export const OnlyOneRow = () => (
  <Table>
    <TableBody>
      <TableRow bodycells={[
        <Badge status="alert" title="offline" />,
        <>
          <Ellipse status="alert" /> <p>rh-first</p>
        </>,
        <>
          <p>Český</p> <p> Krumlov Czechia</p>
        </>,
        <p>—</p>,
        <>
          <Icon label="opensource-sm" /> <span className="version">2.8.0</span>
        </>,
        <>
          <Button type="outlined" label="" icon="trush" />
          <Button type="outlined" icon="search" label="" />
        </>,
    ]} />
    </TableBody>
  </Table>
)