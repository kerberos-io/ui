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
    <DropList icon="cameras" title="frontdor" rounded/>
    <DropList icon="cameras" title="frontdor" rounded/>
    <DropList icon="cameras" title="backdoor" rounded/>
</Dropdown>

export const Classification = () =><Dropdown search direction="right">
    <DropList icon="cameras" title="animal" rounded/>
    <DropList icon="cameras" title="pedestrian" rounded/>
    <DropList icon="cameras" title="cyclist" rounded/>
    <DropList icon="cameras" title="car" rounded/>
</Dropdown>

export const NewestOldest = () =><form><Dropdown search={false} direction="right" selectOne>
    <DropList icon="cameras" title="Newest" radio/>
    <DropList icon="cameras" title="Oldest" radio/>
</Dropdown></form>

export const Languages = () => <Dropdown search={false} direction="right" selectOne>
    <DropList title="EN" isInput={false} />
    <DropList title="ES" isInput={false} />
    <DropList title="DE" isInput={false} />
</Dropdown>