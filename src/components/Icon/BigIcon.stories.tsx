import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
    title: "Icons/BigIcons",
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const CircleCheckBig = () => <Icon label={"circle-check-big"} />
export const CircleCrossBig = () => <Icon label={"circle-cross-big"} />
export const LockedBigBig = () => <Icon label={"locked-big"} />
export const UnlockedBig = () => <Icon label={"unlocked-big"} />