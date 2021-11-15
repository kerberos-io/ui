import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tabs, { TabsProps } from "./Tabs";
import { ControlBar } from "../ControlBar";
import Icon from "../Icon";

export default {
    title: "Components/Tabs",
    component: Tabs,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TabsProps> = (args) => <ControlBar>
    <Tabs {...args} />
</ControlBar>;

// Reuse that template for creating different stories
export const ThreeTab = Template.bind({});
ThreeTab.args = {
    options: [{
        label: "Details",
        value: "details",
        icon: <Icon label={"trush"}/>,
        active: true,
    }, {
        label: "Queue",
        value: "queue",
        icon: <Icon label={"user"}/>,
        active: false,
    }, {
        label: "Detections",
        value: "detections",
        icon: <Icon label={"user"}/>,
        active: false,
    }],
    onClick: (option) => {
        alert("Selected Option:" + option)
    }
};


// Reuse that template for creating different stories
export const TabsOn = Template.bind({});
TabsOn.args = {
    options: ["Details", "Queue", "Detections"]
};
