import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Input,InputProps } from "./Input";
import { Form } from "./Form";
import { FieldSet } from "./FieldSet";
export default {
    title:"Components/Input",
    component:Input,
    argTypes: { onClick: { action: 'clicked' } },

} as Meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const _Input = Template.bind({});
_Input.args={
    label: "password",
    readonly: false,
    disabled:false,
    hint:"Forgotten password?",
    iconleft:"accounts",
    placeholder:"Your password",
    iconright:"activity",
    seperate:true,
    type:"password"
}

export const Error = Template.bind({});
Error.args={
    label: "password",
    readonly: false,
    disabled:false,
    error: "Password is not complex enough",
    hint:"Forgotten password?",
    iconleft:"accounts",
    placeholder:"Your password",
    iconright:"activity",
    seperate:true,
    type:"password"
}

export const _Form = () =><Form>
    <FieldSet>
     <Input  
        label= "username or email"
        readonly={false}
        disabled={false}
        iconleft="accounts"
        placeholder="Your username/email"
        // value=""
        type="text"
        />
    <Input  
        label= "password"
        readonly={false}
        disabled={false}
        hint="Forgotten password?"
        iconleft="accounts"
        placeholder="Your password"
        iconright="activity"
        seperate={true}
        // value=""
        type="password"
        />
        </FieldSet>
    </Form>

export const _Buttonize1 = ()=>  <Input                        
    iconright="arrow-down-sm"
    type="button"
    value="EN"
    />
export const _Buttonize2 = ()=>  <Input                        
iconleft="preferences"
type="button"
/>
export const _Buttonize3 = ()=>  <Input
iconleft="sort"
value="Name"
type="button"
iconright="arrow-down-sm"
/>
