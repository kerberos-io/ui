import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { label: "Default Button", icon: "dashboard", type: "" };

export const Neutral = Template.bind({});
Neutral.args = { ...Default.args, label: "Neutral Button", icon: "livestream", type: "neutral" };

export const Success = Template.bind({});
Success.args = { ...Default.args, label: "Success Button", icon: "media", type: "success" };

export const Alert = Template.bind({});
Alert.args = { ...Default.args, label: "Alert Button", icon: "alerts", type: "alert" };

export const Outlined = Template.bind({});
Outlined.args = { ...Default.args, label: "Outlined Button", icon: "cameras", type: "outlined" };
