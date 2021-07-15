import React from "react";
import "./block.scss"

export interface BlockFooterProps{
    children?:any
}

const BlockFooter =({children}:BlockFooterProps)=>{
        return(
            <div className="block-footer">
            {children}
          </div>
          
        )
}
export default BlockFooter