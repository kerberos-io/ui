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
export const Default = Template.bind({});
Default.args = { label: "Default Button", icon: "dashboard", type: "" };
