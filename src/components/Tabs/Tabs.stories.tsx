import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Tabs }  from "./Tabs";
import { Tab } from "./Tab";
import { ControlBar } from "../ControlBar";
import Icon from "../Icon";

export default {
    title: "Components/Tabs",
    component: Tabs,
} as Meta;

export const TabsThree = () => <ControlBar type={"row"}>
    <Tabs>
        <Tab label={"Overview"} active={true} value={"overview"} icon={<Icon label={"cameras"}/>} />
        <Tab label={"Camera"} value={"camera"} icon={<Icon label={"cameras"}/>} />
        <Tab label={"Overview"} value={"overview"} icon={<Icon label={"cameras"}/>} />
    </Tabs>
</ControlBar>
