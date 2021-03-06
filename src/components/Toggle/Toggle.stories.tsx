import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Toggle, { ToggleProps } from "./Toggle";

export default {
    title: "Components/Toggle",
    component: Toggle,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

// Reuse that template for creating different stories
export const ToggleOff = Template.bind({});
ToggleOff.args = {
    on:false
};


// Reuse that template for creating different stories
export const ToggleOn = Template.bind({});
ToggleOn.args = {
    on:true
};
