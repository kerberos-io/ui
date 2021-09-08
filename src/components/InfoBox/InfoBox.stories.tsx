import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import InfoBox, { InfoBoxProps } from "./InfoBox";

export default {
    title: "Components/InfoBox",
    component: InfoBox,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { title: "Title", image: "...", description: "description" };
