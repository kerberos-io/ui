import React from "react";
import { Meta } from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import VideoCard,{VideoCardProps} from "./VideoCard";

export default {
    title:"Components/VideoCard",
    component:VideoCard,
    argTypes:{ onClick : {action:"clicked"}}
} as Meta;

const Template: Story<VideoCardProps> = (args) => <Template {...args} />
export const Default = Template.bind({})
Default.args={
    label:"Düsseldorf Auobahn",
    headerStatus:"live",
    videoStatus:"recording",
    videoSource:"http://via.placeholder.com/500"
}