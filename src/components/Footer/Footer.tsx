import React from "react";
import "./footer.scss";
export interface FooterProps {
 children?:any
}

const Footer = ({ children }: FooterProps) => {
  return (
    <div className="footer-container">
      {children}
    </div>
  );
};

export default Footer;
