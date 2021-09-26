import React from "react";
import { TableRow } from ".";
import Badge from "../Badge";
import Ellipse from "../Ellipse";
import Icon from "../Icon";
import Button from "../Button";
export interface CamerasRowProps {
    status:string,
    statusTitle:string,
    name:string,
    nameStatus:string,
    city:string,
    state:string,
    time:any,
    version:any,
    isOffline:boolean,
    isEnterperise?:boolean,
  }
  export const CamerasRow =({
    status,
    statusTitle,
    name,
    nameStatus,
    city,
    state,
    time,
    version,
    isOffline,
    isEnterperise=true
  }:CamerasRowProps)=>{
    return(
      <TableRow
          id={name}
          bodycells={[
            <Badge status={status} title={statusTitle} />,
            <>
              <Ellipse status={nameStatus} /> <p>{name}</p>
            </>,
            <>
              <b>{city}</b>
              <p>{state}</p>
            </>,
            <p>{time}</p>,
           <>
            {
              isEnterperise?<div className="enterprise-version">
              <Icon label="enterprise-sm" />{" "}
              <span className="version">{version}</span>
            </div>:<><Icon label="opensource-sm" /> <span className="version">{version}</span></>
            } 
            </>
            ,
            <>
             {
               isOffline ?<Button type="outlined" label="" icon="trush" />:null
             } 
              <Button type="outlined" icon="search" label="" />
            </>
          ]}
        />
    )
  }
