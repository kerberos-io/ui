import React from "react";
import "./termsofuse.scss"
export interface TermsOfUseProps{
    text:string,
    href:string
}
const TermsOfUse = ({
    text,
    href
}:TermsOfUseProps) =>{
    return(
        <div className="termsofuse" >
            <div className="terms-text">           
                <p>
                    {text}
                    {" "}<a href={href} target="_self">Terms of Use.</a>
                </p>
            </div>
            <div className="terms-checkbox" >
                <input type="checkbox" />
                <b>I have read and agree with Terms of Use</b>
            </div>
        </div>
    )

}
export default TermsOfUse