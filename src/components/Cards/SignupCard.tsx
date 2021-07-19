import React from "react";
import { Block, BlockBody, BlockFooter, BlockHeader } from "../Block";
import Button from "../Button";
import {Input} from "../Input";
import TermsOfUse from "../TermsOfUse";
import "./loginsignup.scss";

const termsofuse={
    text:`We at Kerberos.io are committed to keeping your data private and protected.
    Due to the changes in the legal environment in the European Union and as a
    part of our continuing effort to improve our service, we have updated our `,
    href:""
}

export const SignupCard = () =>
    
        <section className="login-signup-body">
            <Block>
                <BlockHeader>
                    <Button icon="verify" label="signup" type="outlined" />
                    <div>En</div>
                </BlockHeader>
                <BlockBody>
                    <Input
                        label="username"
                        iconleft="accounts"
                        placeholder="Your username"
                        type="text"
                    />
                    <Input
                        label="email"
                        iconleft="email"
                        placeholder="Your email address"
                        type="email"
                    />
                    <Input
                        label="password"
                        iconleft="locked"
                        placeholder="Your password"
                        iconright="activity"
                        seperate
                        type="password"
                     />
                    <Input
                        label="Confirm password"
                        iconleft="locked"
                        placeholder="Repeat your password"
                        iconright="activity"
                        seperate
                        type="password"
                    />

                    <TermsOfUse {...termsofuse}/>
                </BlockBody>
                <BlockFooter>
                    <Button icon="verify" type="outlined" label="Sign-up" />
                    <Button type="transparent" icon="verify" label="Sign-up" />
                </BlockFooter>
            </Block>
        </section>
