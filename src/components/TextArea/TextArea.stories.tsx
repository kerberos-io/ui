import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TextArea, TextAreaProps } from "./TextArea";
export default {
    title:"Components/TextArea",
    component:TextArea,
    argTypes: { onClick: { action: 'clicked' } },

} as Meta;
const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args={
    label: "Service Key",
    readonly: false,
    disabled:false,
    placeholder:"Provide your service key",
    rows: 5,
}

export const Error = Template.bind({});
Error.args={
    label: "Service Key",
    readonly: false,
    disabled:false,
    placeholder:"Provide your service key",
    rows: 5,
    error: "This field is missing",
}
