import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {Dropdown,  DropdownProps } from "./Dropdown";
import {DropList} from "./DropList";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
} as Meta;


export const Site = () =>
    <Dropdown direction="left" icon={"location"} placeholder={"Select a site"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"}
    ]}/>
