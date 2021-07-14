import React from "react";
import "./block.scss"

export interface BlockBodyProps{
    children?:any
}

const BlockBody =({children}:BlockBodyProps)=>{
        return(
            <div className="block-body">
                {children}
            </div>          
        )
}
export default BlockBody