import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid, { GridProps } from "./Grid";

export default {
    title: "Components/Grid",
    component: Grid,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<GridProps> = (args) => <Grid {...args} />;

// Reuse that template for creating different stories
export const SingleGrid = Template.bind({});
SingleGrid.args = { columns: 2, placeholderText: "text" };