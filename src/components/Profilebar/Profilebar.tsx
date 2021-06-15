import React from "react";
import "./profilebar.css";

export interface SidebarProps  {
    logo: string;
    title: string;
    version: string;
    mobile: boolean;
};

const Profilebar = ({
                    logo = "images/header-minimal-logo-36x36.png",
                    title = "Kerberos.io",
                    version = "v1.0",
                    mobile = false,
                }: SidebarProps) => {

    return (
        <div className="sidebar-panel">

        </div>);
};

export default Profilebar;
