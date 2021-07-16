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


export const SignupCard= () =>
    
        <section className="login-body">
            <Block>
                <BlockHeader>
                    <Button icon="verify" label="signup" type="outlined" />
                    <div>En</div>
                </BlockHeader>
                <BlockBody>
                    <InputBox
                        titleleft="Username"
                        iconleft="accounts"
                        placeholder="Your username"
                    />
                    <InputBox
                        titleleft="Email"
                        iconleft="email"
                        placeholder="Your email address"
                    />
                    <InputBox
                        titleleft="Password"
                        iconleft="locked"
                        placeholder="Your password"
                        iconright="activity"
                        seperate
                     />
                    <InputBox
                        titleleft="Confirm password"
                        iconleft="locked"
                        placeholder="Repeat your password"
                        iconright="activity"
                        seperate
                    />

                <p style={{width:"72%"}} >
                We at Kerberos.io are committed to keeping your data private and protected. Due to the changes in the legal environment in the European Union and as a part of our continuing effort to improve our service, we have updated our <a style={{color:"var(--hub)",textDecoration:"underline"}}>Terms of Use.</a>
                </p>
                </BlockBody>
                <BlockFooter>
                    <Button icon="verify" type="outlined" label="Sign-up" />
                    <Button type="default" icon="verify" label="Sign-up" />
                </BlockFooter>
            </Block>
        </section>
