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
export const Api = () => <Icon label="api" />
export const Book = () => <Icon label="book" />
export const Github = () => <Icon label="github" />
export const GithubNav = () => <Icon label="github-nav" />
export const Lock = () => <Icon label="lock" />

export const AllIcons = () => <>
    <Accounts/>&nbsp;&nbsp;<Activity/>&nbsp;&nbsp;<Alerts/>&nbsp;&nbsp;<Camera/>&nbsp;&nbsp;<Channels/><br/>
    <Cloud/>&nbsp;&nbsp;<Counting/>&nbsp;&nbsp;<Dashboard/>&nbsp;&nbsp;<Forward/>&nbsp;&nbsp;<Logout/>&nbsp;&nbsp;<br/>
    <Media/>&nbsp;&nbsp;<Livestream/>&nbsp;&nbsp;<Refresh/>&nbsp;&nbsp;<Share/>&nbsp;&nbsp;<Sites/><br/>
    <Subscription/>&nbsp;&nbsp;<Tasks/>&nbsp;&nbsp;<User/>&nbsp;&nbsp;<Watch/>&nbsp;&nbsp;<ToggleOff/><br/>
    <Bookmark/>&nbsp;&nbsp;<Star/>&nbsp;&nbsp;<Checkbox/>&nbsp;&nbsp;<Sort/>&nbsp;&nbsp;<Plus/><br/>
    <Search/>&nbsp;&nbsp;<Login/>&nbsp;&nbsp;<Info/>&nbsp;&nbsp;<Cross/>&nbsp;&nbsp;<Verify/>&nbsp;&nbsp;<br/>
    <Email/>&nbsp;&nbsp;<Locked/>&nbsp;&nbsp;<Trush/>&nbsp;&nbsp;<ArrowUp/>&nbsp;&nbsp;<Location/><br/>
    <Flag/>&nbsp;&nbsp;<List/>&nbsp;&nbsp;<Compass/>&nbsp;&nbsp;<Grid/>&nbsp;&nbsp;<Pencil/><br/>
    <ArrowDown/>&nbsp;&nbsp;<Preferences/>&nbsp;&nbsp;<ArrowRight/>&nbsp;&nbsp;<EyeCrossed/>&nbsp;&nbsp;<Api/><br/>
    <Book/>&nbsp;&nbsp;<Github/>&nbsp;&nbsp;<GithubNav/>&nbsp;&nbsp;<Lock/>
</>


export const InfoAddUser = () => <Icon label="info-add-user" />
export const InfoHeavyBox = () => <Icon label="info-heavy-box" />
export const InfoProfessor = () => <Icon label="info-professor" />
export const InfoSurveillance = () => <Icon label="info-surveillance" />

export const AllInfos = () => <>
    <InfoAddUser/>&nbsp;&nbsp;<InfoProfessor/>&nbsp;&nbsp;<InfoHeavyBox/><br/>
</>
