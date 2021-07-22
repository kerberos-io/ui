import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Block, { BlockProps } from "./Block";
import BlockHeader, { BlockHeaderProps } from "./BlockHeader";
import BlockBody, {BlockBodyProps} from "./BlockBody";
import BlockFooter, {BlockFooterProps} from "./BlockFooter"
import Button from "../Button";
import Icon from "../Icon";
import {Input} from "../Input";
import AlertMessage from "../AlertMessage";
export default {
    title:"Components/Block",
    component:Block
} as Meta;


export const BlockWithLogin= () => <Block>
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


