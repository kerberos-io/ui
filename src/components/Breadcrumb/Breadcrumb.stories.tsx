import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";
import Button from "../Button";

export default {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

// Reuse that template for creating different stories
export const WithTitle = Template.bind({});
WithTitle.args = {
    title: "Dashboard",
};

export const WithOneLevelDeep = Template.bind({});
WithOneLevelDeep.args = {
    title: "Media",
    level1: "12-09-2035"
};

export const WithTwoLevelDeep = Template.bind({});
WithTwoLevelDeep.args = {
    title: "Media",
    level1: "12-09-2035",
    level1Link: "https://google.com",
    level2: "17:08"
};

export const WithButton = () => <Breadcrumb title={"Media"} level1={"12-09-2035"}>
    <Button label={"Create media"} icon={"media"}/>
</Breadcrumb>
