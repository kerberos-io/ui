import React from "react";
import "./sidebar.scss";

export interface SidebarProps  {
    logo: string;
    title: string;
    version: string;
    mobile: boolean;
};

const Sidebar = ({
                    logo = "images/header-minimal-logo-36x36.svg",
                    title = "Kerberos.io",
                    version = "v1.0",
                    mobile = false,
                }: SidebarProps) => {

    return (
        <div className="sidebar">
            <div className="sidebar-panel">
                <div className="brand">
                    { mobile && <div className="hamburger">
                        <label htmlFor="close">
                            <input type="checkbox" id="close"/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div> }

                    <a className="brand-logo">
                        <img src={logo}/>
                        <div className="name">
                            {title}
                            <span className="version">{version}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>);
};

export default Sidebar;
