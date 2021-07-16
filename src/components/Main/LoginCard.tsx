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


export const LoginCard= () =>
    
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
