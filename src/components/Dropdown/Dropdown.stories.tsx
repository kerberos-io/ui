import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {Dropdown,  DropdownProps } from "./Dropdown";
import {DropList} from "./DropList";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
} as Meta;


export const SitesMultipleSelect = () =>
    <Dropdown direction="right" icon={"location"} placeholder={"Select sites"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "FC Bayern Munich, Germany", value: "Düsseldorf, Germany"},
        {label: "Berlin, Germany", value: "Berlin, Germany"}
    ]}/>


export const CameraSingleSelect = () =>
    <Dropdown direction="right" icon={"cameras"} placeholder={"Select a camera"} isRadio={true} items={[
        {label: "Camera 1", value: "Camera 1"},
        {label: "Camera 2", value: "Camera 2"},
        {label: "Camera 3", value: "Camera 3"},
        {label: "Camera 4", value: "Camera 4"},
        {label: "Camera 5", value: "Camera 5"}
    ]}/>
