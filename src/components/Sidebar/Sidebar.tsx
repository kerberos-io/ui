import React from "react";
import "./sidebar.scss";

export interface SidebarProps  {
    logo?: string;
    title?: string;
    version?: string;
    mobile?: boolean;
    children?:any;
};

const Sidebar = ({
                    logo = "images/header-minimal-logo-36x36.svg",
                    title = "Kerberos.io",
                    version = "v1.0",
                    mobile = false,
                    children,
                }: SidebarProps) => {

    return (
        <div className="sidebar ok">
            <div className="sidebar-panel fff">
               pk fff
            </div>
            {children}
        </div>);
};

export default Sidebar;
