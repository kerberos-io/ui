import React  from "react";
import Icon from "../Icon";
import "./social-list.scss";
export interface SocialListProps{
    list:{
        label:string,
        href:string
    }[]
}

const SocialList = ({list}:SocialListProps) => {
    return(
        <li className="social-list">
            {
                list.map(({label,href}) => (
                    <a href={href}>
                        <Icon label={label}/>
                    </a>
                ))
            }
        </li>
    )
}

export default SocialList
