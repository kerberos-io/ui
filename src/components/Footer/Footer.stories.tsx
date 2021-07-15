import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";
import FooterList from "./FooterList";
export default {
    title: "Components/Footer",
    component: Footer
} as Meta;

export const Default = () =><Footer>
   <FooterList 
        title="Kerberos.io"
        items={[
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
        ]}
    />
    <FooterList 
        title="Products"
        items={[
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
        ]}
    />
    <FooterList 
        title="Support"
        items={[
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
        ]}
    />
    <FooterList 
        title="Company"
        items={[
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
        ]}
    />
</Footer>

