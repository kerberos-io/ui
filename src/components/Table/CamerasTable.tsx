import React from "react"
import { Table,TableHeader,TableRow,TableBody } from "."

export interface CamarasTableProps{
    children:any,
  }
  export const CamerasTable =({children}:CamarasTableProps)=>{
    return(
      <Table>
      <TableHeader>
        <TableRow
          headercells={[
            "status",
            "name",
            "site",
            "uptime",
            "version",
            "controls",
          ]}
        />
      </TableHeader>
      <TableBody>
        {children}
      </TableBody>
      </Table>
    )
  }