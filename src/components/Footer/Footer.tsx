import React from "react";
import "./footer.scss";
export interface FooterProps {
 children?:any
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer>
      {children}
    </footer>
  );
}

export default Footer
