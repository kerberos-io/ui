import React from "react"
import { TableRow } from "."
import Pin from "../Pin"
import Badge from "../Badge"
import Button from "../Button"
export interface ConnectionRowProps {
    pinStatus:string,
    sitePin:string,
    siteName:string,
    techName:string,
    techContainer:string,
    camStatus:string,
    camDevided:number,
    camDevisor:number,
  
  
  }
 export const ConnectionRow =({
    pinStatus,
    sitePin,
    siteName,
    techName,
    techContainer,
    camStatus,
    camDevided,
    camDevisor
  }:ConnectionRowProps) =>{
    return(
      <TableRow id={"pin"} bodycells={[
        <>
          <Pin pin={sitePin} status={pinStatus} round/><b>{siteName}</b>
          </>,
        <>
          <b>{techName} </b>
          <p>{techContainer}</p>
        </>,
        <Badge status={camStatus} devided={camDevided} devisor={camDevisor} />,
        <Button type="outlined" icon="pencil" label="" />
      ]} />
    )
  }
