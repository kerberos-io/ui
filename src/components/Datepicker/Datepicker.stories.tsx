import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Datepicker, DatepickerProps } from "./Datepicker";
export default {
    title:"Components/Datepicker",
    component:Datepicker,
    argTypes: { onClick: { action: 'clicked' } },

} as Meta;
const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const DatepickerSelect = Template.bind({});
DatepickerSelect.args={
    label: "password",
    readonly: false,
    disabled:false,
    hint:"Forgotten password?",
    iconleft:"accounts",
    placeholder:"Your password",
    iconright:"activity",
    seperate:true,
    type:"password"
}