import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";

export default {
    title: "Components/Footer",
    component: Footer,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Footer component
const Template: Story<FooterProps> = (args) => <Footer {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { label: "Default Footer", icon: "dashboard", type: "" };

export const Neutral = Template.bind({});
Neutral.args = { ...Default.args, label: "Neutral Footer", icon: "livestream", type: "neutral" };

export const Success = Template.bind({});
Success.args = { ...Default.args, label: "Success Footer", icon: "media", type: "success" };

export const Alert = Template.bind({});
Alert.args = { ...Default.args, label: "Alert Footer", icon: "alerts", type: "alert" };

export const Outlined = Template.bind({});
Outlined.args = { ...Default.args, label: "Outlined Footer", icon: "cameras", type: "outlined" };
