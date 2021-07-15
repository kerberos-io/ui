import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";
import FooterCopyright from "./FooterCopyright";
import FooterList from "./FooterList";
import SocialList  from "../SocialList";

export default {
    title: "Components/Footer",
    component: Footer
} as Meta;

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

export const Default = () => <Footer>
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

