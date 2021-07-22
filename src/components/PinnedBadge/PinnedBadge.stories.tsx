import React from "react";
import PinnedBadge ,{PinnedBadgeProps}from "./PinnedBadge";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
    title:"Components/PinnedBadge",
    component:PinnedBadge
} as Meta

const Template:Story<PinnedBadgeProps> = (args) =><PinnedBadge {...args} />
export const Default = Template.bind({})
Default.args={
    pin:"Robert McCurry Junior",
    status:"hub"
}

export const Round = Template.bind({})
Round.args = {
    pin:"Jhon MacGregor Osvaldo Carliony",
    status:"success-darker",
    round:true
}