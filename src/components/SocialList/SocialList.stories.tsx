import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SocialList, {SocialListProps} from "./SocialList";
import Icon from "../Icon";
export default {
    title:"Components/SocialList",
    component:SocialList
} as Meta

const Template: Story<SocialListProps> = (args) => <SocialList {...args} />

export const Default = Template.bind({});
Default.args={
    list:[
        {
            label:"twitter",
            href:""
        },
        {
            label:"reddit",
            href:""
        },
        {
            label:"youtube",
            href:""
        },
        {
            label:"github",
            href:""
        }       
        
    ]
}
