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
export const Camera = () => <Icon label={"camera"}/>
export const Channels = () => <Icon label={"channels"}/>
export const Counting = () => <Icon label={"counting"}/>
export const Dashboard = () => <Icon label={"dashboard"}/>
export const Logout = () => <Icon label={"logout"}/>
export const Media = () => <Icon label={"media"}/>
export const Play = () => <Icon label={"play"}/>
export const Share = () => <Icon label={"share"}/>
export const Sites = () => <Icon label={"sites"}/>
export const Subscription = () => <Icon label={"subscription"}/>
export const Tasks = () => <Icon label={"tasks"}/>
export const Watch = () => <Icon label={"watch"}/>
