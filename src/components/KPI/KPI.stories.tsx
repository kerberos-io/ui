import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import KPI, { KPIProps } from "./KPI";

export default {
    title: "Components/KPI",
    component: KPI,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<KPIProps> = (args) => <KPI {...args} />;

// Reuse that template for creating different stories
export const NoData = Template.bind({});
NoData.args = { number: "", divider: "" };

export const WithKPU = Template.bind({});
WithKPU.args = { number: "15", divider: "20" };

export const WithPositiveKPU = Template.bind({});
WithPositiveKPU.args = { number: "15", divider: "20", progress: "+", progressValue: "7" };

export const WithPositiveFooter = Template.bind({});
WithPositiveFooter.args = { number: "15", divider: "20", progress: "+", progressValue: "7", footer: "Number of users" };


export const MultipleKPI = () => <div className={"grid"}>
    <KPI number={"15"} divider={"20"} footer={"Number of user"} progress={"+"} progressValue={"7 week"}/>
    <KPI number={"8"} divider={"12"} footer={"Number of cameras"} progress={"-"} progressValue={"4 yesterday"}/>
</div>
