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
export const Bookmark = () => <Icon label={"bookmark"}/>
export const Star = () => <Icon label={"star"} />
export const Checkbox = () => <Icon label={"checkbox"} />
export const Sort = () => <Icon label={"sort"} />
export const Plus = () => <Icon label={"plus-circle"} />
export const Search = () => <Icon label={"search"} />
export const Login = () => <Icon label={"login"} />
export const Info = () => <Icon label="info" />
export const Cross = () => <Icon label="cross" />
export const Verify = () => <Icon label="verify" />
export const Email = () => <Icon label="email" />
export const Locked = () => <Icon label="locked" />
export const Trush = () => <Icon label="trush" />
export const ArrowUp = () => <Icon label="arrow-up" />
export const Location = () => <Icon label="location" />
export const Flag = () => <Icon label="flag" />
export const List = () => <Icon label="list" />
export const Compass = () => <Icon label="compass" />
export const Grid = () => <Icon label="grid" />
export const Pencil = () => <Icon label="pencil" />
export const ArrowDown = () => <Icon label="arrowdown" />
export const Preferences = () => <Icon label="preferences" />
export const ArrowRight = () => <Icon label="arrowright" />
export const EyeCrossed = () => <Icon label="eye-crossed" />




