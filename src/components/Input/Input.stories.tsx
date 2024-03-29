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

export const Disabled = () => <Input
    disabled={true}
    value="This field is disabled"
/>

export const Buttonize1 = ()=>  <Input
    iconright="arrow-down-sm"
    type="button"
    value="EN"
/>

    export const Buttonize2 = ()=>  <Input
    iconleft="preferences"
    type="button"
/>

export const Buttonize3 = ()=>  <Input
    iconleft="sort"
    value="Name"
    type="button"
    iconright="arrow-down-sm"
/>

export const MultiButtons = () =><div className="grid-container --eight-columns">
    <Input 
    label= "Time 1"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 2"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 3"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 4"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 5"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 6"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 7"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
    <Input 
    label= "Time 8"
    iconleft=""
    placeholder="00:00"
    value="00:00"
    type="text"
    noPadding
    />
</div>