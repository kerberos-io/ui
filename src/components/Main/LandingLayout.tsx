import React from "react";
import { Footer, FooterList, FooterCopyright } from "../Footer";
import Gradient from "../Gradient";
import "./main.scss";

const Copyright = {
    title: "Kerberos.io",
    description: "© 2021 Verstraeten.io",
    description2: "All rights reserved.",
    socials:[
        {
            label:"twitter",
            href:""
        },
        {
            label:"reddit",
            href:""
        },
        {
            label:"youtube",
            href:""
        },
        {
            label:"github",
            href:""
        }
    ]
};

const Column2 = [
    {
        item:"Opensource Agent",
        href:""
    },
    {
        item:"Enterprise Agent",
        href:""
    },
    {
        item:"Kerberos Hub",
        href:""
    }
];

const Column3 = [
    {
        item:"Opensource Agent",
        href:""
    },
    {
        item:"Enterprise Agent",
        href:""
    },
    {
        item:"Kerberos Hub",
        href:""
    }
];

const Column4 = [
    {
        item:"Opensource Agent",
        href:""
    },
    {
        item:"Enterprise Agent",
        href:""
    },
    {
        item:"Kerberos Hub",
        href:""
    }
];

export interface LandingLayoutProps{
    children:any,
    title?:string,
    version?:string,
    description?:string
}
export const LandingLayout = ({
    children,
    title,
    version,
    description}:LandingLayoutProps) =>
    <div id="landing-layout">
        <Gradient/>

        <header>
            <h1>{title} <span className="version">{version}</span></h1>
            <p>{description}</p>
        </header>

       {children}
        <Footer>
            <FooterCopyright {...Copyright} />
            <FooterList
                title="Products"
                items={Column2}
            />
            <FooterList
                title="Support"
                items={Column3}
            />
            <FooterList
                title="Company"
                items={Column4}
            />
        </Footer>
    </div>
