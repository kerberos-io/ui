import React from "react";
// import Icon from "../Icon";
import "./footer.scss";
import SocialList  from "../SocialList";
export interface FooterProps {
  title: string;
  items: {
    isSocial?:boolean,
    socialList?:any,
    item?: string;
    href?: string;
  }[];
}

const FooterList = ({ title, items }: FooterProps) => {
  return (
    <div className="footer-list">
      <ul>
        <li>
            <h3>{title}</h3>
        </li>
        {items.map(({ item, href,isSocial=false,socialList }) => (
            isSocial ? <SocialList list={socialList} /> :
            <li>
              <a href={href}  target="_self">
                <p>{item}</p>
              </a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
