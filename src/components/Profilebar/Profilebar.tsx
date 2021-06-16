import React from "react";
import "./profilebar.scss";

export interface ProfilebarProps  {
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
                }: ProfilebarProps) => {

    return (
        <div className="profilebar">

        </div>);
};

export default Profilebar;
