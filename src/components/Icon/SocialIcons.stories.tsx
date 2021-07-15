import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
    title: "Icons/SocialIcons",
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const Twitter = () => <Icon label={"twitter"} />
export const Reddit = () => <Icon label={"reddit"} />
export const Youtube = () => <Icon label={"youtube"} />
export const Github = () => <Icon label={"github"} />