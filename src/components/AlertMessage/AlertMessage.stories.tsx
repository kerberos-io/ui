import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AlertMessage, { AlertMessageProps } from "./AlertMessage";
export default {
    title:"Components/AlertMessage",
    component:AlertMessage,
    
} as Meta;
const Template: Story<AlertMessageProps> = (args) => <AlertMessage {...args} />;
export const Default = Template.bind({});
Default.args={
    message:"Wrong password, please try again!"
}
