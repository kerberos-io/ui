import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import InfoBar, { InfoBarProps } from "./InfoBar";

export default {
    title: "Components/InfoBar",
    component: InfoBar,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InfoBarProps> = (args) => <InfoBar {...args} />;

// Reuse that template for creating different stories
export const Alert = Template.bind({});
Alert.args = {
    type: "alert",
    message:"Wrong password, please try again!"
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
    message:"Everything worked as expected!"
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
    message:"Please provide your information"
};

export const Loading = Template.bind({});
Loading.args = {
    type: "loading",
    message:"Loading, please wait a minute"
};
