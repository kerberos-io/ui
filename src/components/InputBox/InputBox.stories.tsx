import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import InputBox, { InputBoxProps } from "./InputBox";
export default {
    title:"Components/InputBox",
    component:InputBox,

} as Meta;

const Template: Story<InputBoxProps> = (args) => <InputBox {...args} />;
export const Default = Template.bind({});
Default.args={
    titleleft:"Password",
    hint:"Forgotten password?",
    iconleft:"accounts",
    placeholder:"Your password",
    iconright:"activity",
}
