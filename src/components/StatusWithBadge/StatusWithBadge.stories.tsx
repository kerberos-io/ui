import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import StatusWithBadge,{StatusWithBadgeProps} from "./StatusWithBadge";

export default {
    title:"Components/StatusWithBadge",
    component:StatusWithBadge,
} as Meta;

const Template : Story<StatusWithBadgeProps> = (args) => <StatusWithBadge {...args} />
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