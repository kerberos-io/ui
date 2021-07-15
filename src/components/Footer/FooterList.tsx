import React from "react";
import "./footer.scss";
import SocialList  from "../SocialList";
export interface FooterProps {
  title: string;
  items: {
    item?: string;
    href?: string;
  }[];
}

const FooterList = ({ title, items }: FooterProps) => {
  return (
    <div className="footer-list">
      <h3>{title}</h3>
      <ul>
        { items.map(({ item, href }) => (
            <li>
              <a href={href}>
                <p>{item}</p>
              </a>
            </li>
        )) }
      </ul>
    </div>
  );
};

export default FooterList;
