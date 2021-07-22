import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import ALert,{ALertProps}  from "./Alert";

export default {
    title:"Components/Alert",
    component:ALert
} as Meta
const Template: Story<ALertProps> = (args) => <ALert {...args} />;

export const _Alert= Template.bind({})
_Alert.args={
    platter:true,
    notify:true,
    blink:true
}