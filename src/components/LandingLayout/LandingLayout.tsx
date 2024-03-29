import React from "react";
import { Footer, FooterList, FooterCopyright } from "../Footer";
import Gradient from "../Gradient";
import "./landinglayout.scss";

const Copyright = {
    title: "Kerberos.io",
    description: "© 2021 Verstraeten.io",
    description2: "All rights reserved.",
    socials:[
        {
            label:"twitter",
            href:"https://twitter.com/kerberosio"
        },
        {
            label:"reddit",
            href:"https://www.reddit.com/r/kerberos_io/"
        },
        {
            label:"youtube",
            href:"https://www.youtube.com/channel/UCnd9q7iRNNw4W95eQwQuECA"
        },
        {
            label:"github",
            href:"https://github.com/kerberos-io"
        }
    ]
};

const Column2 = [
    {
        item:"Kerberos Agent",
        href:"https://doc.kerberos.io/agent/first-things-first/"
    },
    {
        item:"Kerberos Factory",
        href:"https://doc.kerberos.io/factory/first-things-first/"
    },
    {
        item:"Kerberos Vault",
        href:"https://doc.kerberos.io/vault/first-things-first/"
    },
    {
        item:"Kerberos Hub",
        href:"https://doc.kerberos.io/hub/first-things-first/"
    }
];

const Column3 = [
    {
        item:"Documentation",
        href:"https://doc.kerberos.io/"
    },
    {
        item:"Youtube",
        href:"https://www.youtube.com/channel/UCnd9q7iRNNw4W95eQwQuECA"
    },
    {
        item:"Support",
        href:"https://kerberosio.zendesk.com/hc/en-us"
    },
    {
        item:"Reddit Community",
        href:"https://www.reddit.com/r/kerberos_io/"
    }
];

const Column4 = [
    {
        item:"Homepage",
        href:"https://kerberos.io/"
    },
    {
        item:"About",
        href:"https://kerberos.io/about/"
    },
    {
        item:"Contact",
        href:"https://kerberos.io/about/"
    },
    {
        item:"Careers",
        href:"https://kerberos.io/about/"
    }
];


export interface LandingLayoutProps{
    children:any,
    title?:string,
    version?:string,
    description?:string,
    hideFooter?:boolean
}
const LandingLayout = ({
    children,
    title,
    version,
    description,
    hideFooter
    }:LandingLayoutProps) =>
    <div id="landing-layout">
        <Gradient/>

        <header>
            <h1>{title} <span className="version">{version}</span></h1>
            <p>{description}</p>
        </header>

       {children}
        { !hideFooter && <Footer>
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
        </Footer> }
    </div>
export default LandingLayout
