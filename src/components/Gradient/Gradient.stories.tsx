import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Gradient, { GradientProps } from "./Gradient";

export default {
    title: "Components/Gradient",
    component: Gradient,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<GradientProps> = (args) => <Gradient {...args} />;

// Reuse that template for creating different stories
export const General = Template.bind({});
General.args = { };

