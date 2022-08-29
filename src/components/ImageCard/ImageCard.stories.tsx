import React from "react";
import { Meta } from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import {ImageCard,ImageCardProps} from "./ImageCard";

export default {
    title:"Components/ImageCard",
    component:ImageCard
} as Meta;


const Template: Story<ImageCardProps> = (args) => <ImageCard {...args} />
export const Embedded = Template.bind({})
Embedded.args={
    label:"Livestream",
    headerStatus:"alert",
    headerStatusTitle:"live",
    videoStatus:"recording",
    videoStatusTitle:"live",
    imageSrc:"https://www.researchgate.net/profile/Jaume-Segura-Garcia/publication/320916970/figure/fig3/AS:667648576745482@1536191233299/A-frame-example-from-Big-Buck-Bunny-video-sequence.jpg",
}