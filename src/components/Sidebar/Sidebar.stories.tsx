import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import Button from "../Button";

export default {
    title: "Components/Sidebar",
    component: Sidebar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { title: "Kerberos.io", version: "v1.0" };

export const Version = Template.bind({});
Version.args = { ...Default.args, version: "v2.0" };

export const WithButton = () => <Sidebar title="Kerberos.io" version="v3.0">
    <Button label={"press me"}></Button>
</Sidebar>
