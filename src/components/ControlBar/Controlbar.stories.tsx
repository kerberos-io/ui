import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Input } from "../Input";
import Button from "../Button";
import { FilterSort,FilterSearch,FilterDisplay,FilterSite } from ".";
import {ControlBar} from "./ControlBar"
import { Dropdown } from "../Dropdown";

export default {
    title:"Components/ControlBar",
    component:ControlBar
 } as Meta

 export const _ControlBar = () => <ControlBar>

     <Input iconleft="search" placeholder="Search..." type="text" style={"controlbar"} />
     <Input iconleft="search" placeholder="Search..." type="text" style={"controlbar"} />
     <Dropdown direction="right" icon={"location"} placeholder={"Select sites"} style={"controlbar"} items={[
         {label: "Hannver, Germany", value: "Hannver, Germany"},
         {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
         {label: "FC Bayern Munich, Germany", value: "FC Bayern Munich, Germany"},
         {label: "Berlin, Germany", value: "Berlin, Germany"}
     ]}/>

</ControlBar>

export const _ControlBar2 = () => <ControlBar>
      <Input iconleft="search" placeholder="Search..." type="text" />
      <Dropdown onChange direction="left" icon={"location"} placeholder={"Site"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"}
    ]}/>
    <Dropdown onChange direction="left" icon={"cameras"} placeholder={"Camera"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"}
    ]}/>
     <Dropdown onChange direction="left" icon={"preferences"} placeholder={"Classification"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"}
    ]}/>
     
     <Dropdown onChange direction="left" icon={"sort"} placeholder={"Sort"} items={[
        {label: "Hannver, Germany", value: "Hannver, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
        {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"}
    ]}/>
</ControlBar>
