import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Input } from "../Input";
import Button from "../Button";
import { FilterSort,FilterSearch,FilterDisplay,FilterSite } from ".";
import {ControlBar} from "./ControlBar"

export default {
    title:"Components/ControlBar",
    component:ControlBar
 } as Meta

 export const _ControlBar = () => <ControlBar>
    <FilterSearch>
        <Input iconleft="search" placeholder="Search..." type="text" />
    </FilterSearch>
    <FilterSite>
    <Input
        type="button"
        iconleft="location"
        iconright="arrow-down-sm"
        value="Site"
    />
    </FilterSite>
    <FilterDisplay>
    <Button type="outlined" icon="list" label="List" />
    <Button type="outlined" icon="grid" label="Grid" />
    <Button type="outlined" icon="compass" label="Map" />
    </FilterDisplay>
    <FilterSort>
        <Input
        iconleft="sort"
        value="Name"
        type="button"
        iconright="arrow-down-sm"
        />
    </FilterSort>
</ControlBar>