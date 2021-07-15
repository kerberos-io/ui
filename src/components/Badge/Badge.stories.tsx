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
    status:"live"
}
export const Offline = Template.bind({})
Offline.args={
    status:"offline"
}
export const EventDetected = Template.bind({})
EventDetected.args={
    status:"event-detected"
}
export const Recording = Template.bind({})
Recording.args={
    status:"recording"
}
export const Active = Template.bind({})
Active.args={
    status:"active"
}
export const Update = Template.bind({})
Update.args={
    status:"update"
}