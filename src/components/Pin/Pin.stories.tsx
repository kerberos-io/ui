import React from "react";
import Pin ,{PinProps}from "./Pin";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
    title:"Components/Pin",
    component:Pin
} as Meta

const Template:Story<PinProps> = (args) =><Pin {...args} />
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