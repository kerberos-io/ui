import React from "react";
import { Main, MainBody } from ".";
import AlertMessage from "../AlertMessage";
import { Block, BlockBody, BlockFooter, BlockHeader } from "../Block";
import Breadcrumb from "../Breadcrumb";
import Button from "../Button";
import { Footer, FooterList, FooterCopyright } from "../Footer";
import Gradient from "../Gradient";
import InputBox from "../InputBox";
import { Navigation, NavigationGroup, NavigationItem, NavigationSection } from "../Navigation";
import Profilebar from "../Profilebar";
import Sidebar from "../Sidebar";
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

export const LoginPage = () =>
    <div id="login-page">
        <Gradient/>

        <header>
            <h1>Kerberos Hub <span className="version">v3.0</span></h1>
            <p>Control panel and management for all Kerberos services</p>
        </header>

        <section className="login-body">
            <Block>
                <BlockHeader>
                    <Button icon="login" label="login" type="outlined" />
                    <div>En</div>
                </BlockHeader>
                <BlockBody>
                    <AlertMessage message="Wrong password, please try again!" />
                    <InputBox
                        titleleft="Username or email"
                        iconleft="accounts"
                        placeholder="Your username/email"
                    />
                    <InputBox
                        titleleft="Password"
                        hint="Forgotten password?"
                        iconleft="accounts"
                        placeholder="Your password"
                        iconright="activity"
                        seperate
                    />
                </BlockBody>
                <BlockFooter>
                    <Button icon="" type="outlined" label="Sign-up" />
                    <Button type="default" icon="logout" label="Login" />
                </BlockFooter>
            </Block>
        </section>

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
