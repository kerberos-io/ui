import "./footer.scss";
import SocialList  from "../SocialList";
import { SocialListProps } from "../SocialList/SocialList";
import React from "react";
export interface FooterCopyrightProps {
    title: string;
    description: string;
    description2: string;
    socials: {
        label: string,
        href: string
    }[];
}

const FooterCopyright = ({ title, description, description2, socials }: FooterCopyrightProps) => {
    return (
        <div className="footer-copyright">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{description2}</p>
            <SocialList list={socials} />
        </div>
    );
};

export default FooterCopyright;
