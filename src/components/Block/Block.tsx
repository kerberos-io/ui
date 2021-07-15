import React from "react";
import "./block.scss"

export interface BlockProps{
    children?:any
}

const Block =({children}:BlockProps)=>{
    return <div className="block-generic">
          {children}
      </div>
}
export default Block
