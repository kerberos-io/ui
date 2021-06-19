import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Profilebar, { ProfilebarProps } from "./Profilebar";

export default {
    title: "Components/Profilebar",
    component: Profilebar,
} as Meta;

const Template: Story<ProfilebarProps> = (args) => <Profilebar {...args} />;

export const Default = Template.bind({});
Default.args = { };

export const Active = Template.bind({});
Active.args = { active: true };
