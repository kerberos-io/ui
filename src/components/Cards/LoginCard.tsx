import React from "react";
import AlertMessage from "../AlertMessage";
import { Block, BlockBody, BlockFooter, BlockHeader } from "../Block";
import Button from "../Button";
import {Input} from "../Input";
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
                    <Input
                      label={"username or email"}
                      placeholder={"Your username/email"}
                      readonly={false}
                      disabled={false}
                      type="text"
                      value=""
                      iconleft="accounts"
                      iconright=""
                    />
                    <Input
                       label={"password"}
                       placeholder={"Your password"}
                       value=""
                       readonly={false}
                       disabled={false}
                       type="password"
                       hint="Forgotten password?"
                       iconleft="accounts"
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
