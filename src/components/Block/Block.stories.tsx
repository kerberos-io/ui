import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Block, { BlockProps } from "./Block";
import BlockHeader, { BlockHeaderProps } from "./BlockHeader";
import BlockBody, {BlockBodyProps} from "./BlockBody";
import BlockFooter, {BlockFooterProps} from "./BlockFooter"
import Button from "../Button";
import TermsOfUse from "../TermsOfUse";
import Icon from "../Icon";
import {Input} from "../Input";
import AlertMessage from "../AlertMessage";
import { Table, TableBody, TableHeader, TableRow } from "../Table";
import Badge from "../Badge";
export default {
    title:"Components/Block",
    component:Block
} as Meta;



export const WithLogin= () => <Block>
    <BlockHeader>
        <Button icon="login" label="login" type="outlined" />
        <div>En</div>
    </BlockHeader>
    <AlertMessage message="Wrong password, please try again!" />
    <BlockBody>
    <Input
        label={"username or email"}
        placeholder={"Your username/email"}
        readonly={false}
        disabled={false}
        type="text"
        // value=""
        iconleft="accounts"
        iconright=""
        />
        <Input
            label={"password"}
            placeholder={"Your password"}
            // value=""
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

const termsofuse={
    text:`We at Kerberos.io are committed to keeping your data private and protected.
    Due to the changes in the legal environment in the European Union and as a
    part of our continuing effort to improve our service, we have updated our `,
    href:""
}
export const WithSignUp = () =><Block>
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


export const WithTable = () => <Block>
<BlockHeader>
  <Button type="outlined" label="Sites" icon="location" />
  <Input type="button" iconleft="preferences" />
</BlockHeader>
<BlockBody>
  <img width="400" src="/images/noise.png" />
</BlockBody>
<Table>
  <TableHeader>
    <TableRow
      headercells={["Site", "Location", "Cameras online"]}
    />
  </TableHeader>
  <TableBody>
        <TableRow bodycells={[
                    <b>Prag</b>,
                    <p>Czechia</p>,
                    <Badge status="hub" devided={7} devisor={2} />,
                ]}/> 
        <TableRow bodycells={[
                    <b>Prag</b>,
                    <p>Czechia</p>,
                    <Badge status="hub" devided={7} devisor={2} />,
                ]}/>     
  </TableBody>
</Table>
</Block>