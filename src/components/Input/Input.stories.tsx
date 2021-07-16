import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";
export default {
    title:"Components/Input",
    component:Input,

} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args={
    label: "password",
    readonly: true,
    titleleft:"Password",
    hint:"Forgotten password?",
    iconleft:"accounts",
    placeholder:"Your password",
    iconright:"activity",
}
