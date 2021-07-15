import React from "react";
// import Icon from "../Icon";
import "./footer.scss";
export interface FooterProps {
  title: string;
  items: {
    item: string;
    itemhref?: string;
  }[];
}

const FooterList = ({ title, items }: FooterProps) => {
  return (
    <div className="footer-list">
      <ul>
        <li>
            <h3>{title}</h3>
        </li>
        {items.map(({ item, itemhref }) => (
          <li>
            <a href={itemhref}  target="_self">
              <p>{item}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
