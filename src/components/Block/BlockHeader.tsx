import React from "react";
import "./block.scss"

export interface BlockHeaderProps{
    children:any
}

const BlockHeader =({children}:BlockHeaderProps)=>{
        return(
            <div className="block-header">
            {children}
          </div>
          
        )
}
export default BlockHeader