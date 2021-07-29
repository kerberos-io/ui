import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
    title: "Icons/SmallIcons",
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const ArrowDownFullSm = () => <Icon label={"arrow-down-sm"} />
export const EnterpriseSm = () => <Icon label={"enterprise-sm"} />
export const OpensourceSm = () => <Icon label={"opensource-sm"} />
export const NoteSm = () => <Icon label={"note-sm"} />
export const FavoriteSm = () => <Icon label={"favorite-sm"} />
export const PlaySm = () => <Icon label={"play-sm"} />
export const TagSm = () => <Icon label={"tag-sm"} />