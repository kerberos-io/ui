import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {Dropdown,  DropdownProps } from "./Dropdown";
import {DropList} from "./DropList";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
} as Meta;


export const Site = () =><Dropdown direction="left">
    <DropList icon="location" title="Hannver, Germany" />
    <DropList icon="location" title="Düsseldorf, Belgium" />
    <DropList icon="location" title="Düsseldorf, Belgium" />
</Dropdown>


export const Cameras = () =><Dropdown search direction="left">
    <DropList icon="cameras" title="frontdor" radio/>
    <DropList icon="cameras" title="frontdor" radio/>
    <DropList icon="cameras" title="backdoor" radio/>
</Dropdown>

export const Classification = () =><Dropdown search direction="right">
    <DropList icon="cameras" title="animal" />
    <DropList icon="cameras" title="pedestrian" />
    <DropList icon="cameras" title="cyclist" />
    <DropList icon="cameras" title="car" />
</Dropdown>

export const NewestOldest = () =><Dropdown search={false} direction="right">
    <DropList icon="cameras" title="Newest" />
    <DropList icon="cameras" title="Oldest" />
</Dropdown>

export const Languages = () => <Dropdown search={false} direction="right">
    <DropList title="EN" isInput={false} />
    <DropList title="ES" isInput={false} />
    <DropList title="DE" isInput={false} />
</Dropdown>