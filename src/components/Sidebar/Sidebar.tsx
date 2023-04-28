import React, { useEffect } from "react";
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

    // create a close and open button for the sidebar
    // when the sidebar is closed, the open button is visible
    // when the sidebar is open, the close button is visible

    useEffect(() => {
        const open = document.getElementById("open");
        const close = document.getElementById("close");
        const sidebar = document.querySelector(".sidebar");
        const mobileview = document.querySelector(".mobile-view");

        if (open && close && sidebar) {
            open.addEventListener("click", () => {
                sidebar.classList.remove("closed");
                if(mobileview) mobileview.classList.add("closed");
            });

            close.addEventListener("click", () => {
                sidebar.classList.add("closed");
                if(mobileview) mobileview.classList.remove("closed");
            });
        }
    }, []);

    return (
        <div className="sidebar-wrapper">
            { mobile && <div className="mobile-view">
                <div className="hamburger">
                    <label htmlFor="open">
                        <input type="checkbox" id="open"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <a className="brand-logo" href="/">
                    <img src={logo}/>
                    <div className="name">
                        {title}
                        <span className="version">{version}</span>
                    </div>
                </a>
                <div className="background-black"></div>
            </div> }
            <div className="sidebar closed">
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
                    {children}
                </div>
            </div>
        </div>);
};

export default Sidebar;
