import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
    title: "Icons/Icon",
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const Accounts = () => <Icon label={"accounts"}/>
export const Activity = () => <Icon label={"activity"}/>
export const Alerts = () => <Icon label={"alerts"}/>
export const Camera = () => <Icon label={"cameras"}/>
export const Channels = () => <Icon label={"channels"}/>
export const Cloud = () => <Icon label={"cloud"}/>
export const Counting = () => <Icon label={"counting"}/>
export const Dashboard = () => <Icon label={"dashboard"}/>
export const Forward = () => <Icon label={"forward"}/>
export const Logout = () => <Icon label={"logout"}/>
export const Media = () => <Icon label={"media"}/>
export const Livestream = () => <Icon label={"livestream"}/>
export const Refresh = () => <Icon label={"refresh"}/>
export const Share = () => <Icon label={"share"}/>
export const Sites = () => <Icon label={"sites"}/>
export const Subscription = () => <Icon label={"subscription"}/>
export const Tasks = () => <Icon label={"tasks"}/>
export const User = () => <Icon label={"user"}/>
export const Watch = () => <Icon label={"watch"}/>
export const ToggleOff = () => <Icon label={"toggle-off"}/>
export const AlertsNotify = () => <Icon label={"alerts-notify"}/>
export const Bookmark = () => <Icon label={"bookmark"}/>
export const Star = () => <Icon label={"star"} />
export const Checkbox = () => <Icon label={"checkbox"} />
export const Sort = () => <Icon label={"sort"} />
export const Plus = () => <Icon label={"plus-circle"} />

