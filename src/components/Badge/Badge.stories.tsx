import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import Badge,{BadgeProps} from "./Badge";

export default {
    title:"Components/Badge",
    component:Badge,
} as Meta;

const Template : Story<BadgeProps> = (args) => <Badge {...args} />
export const Live = Template.bind({})
Live.args = {
    status:"success",
    title:"Live"
}
export const Offline = Template.bind({})
Offline.args={
    status:"secondary",
    title:"offline"

}
export const EventDetected = Template.bind({})
EventDetected.args={
    status:"alert",
    title:"event detected"
}
export const Recording = Template.bind({})
Recording.args={
    status:"recording",
    title:"live",
    blink:true
}
export const Active = Template.bind({})
Active.args={
    status:"success",
    title:"active"
}
export const Update = Template.bind({})
Update.args={
    status:"warning",
    title:"update"
}