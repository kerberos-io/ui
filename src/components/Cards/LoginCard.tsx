import React from "react";
import AlertMessage from "../AlertMessage";
import { Block, BlockBody, BlockFooter, BlockHeader } from "../Block";
import Button from "../Button";
import InputBox from "../InputBox";
import "./loginsignup.scss";


export const LoginCard= () =>
    
        <section className="login-signup-body">
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
