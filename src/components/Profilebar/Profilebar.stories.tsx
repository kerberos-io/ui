import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Profilebar, { SidebarProps } from "./Profilebar";

export default {
    title: "Components/Profilebar",
    component: Profilebar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SidebarProps> = (args) => <Profilebar {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { title: "Kerberos.io", version: "v1.0" };

export const Version = Template.bind({});
Version.args = { ...Default.args, version: "v2.0" };
