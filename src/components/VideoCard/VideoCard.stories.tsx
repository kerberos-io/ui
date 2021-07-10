import React from "react";
import { Meta } from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import VideoCard,{VideoCardProps} from "./VideoCard";

export default {
    title:"Components/VideoCard",
    component:VideoCard,
    // argTypes:{ 
    //     handleClickSD: {action:"clicked"},
    //     handleClickHD: {action:"clicked"},
    //     videoProps : {
    //         src: "https://www.w3schools.com/html/mov_bbb.mp4",
    //         autoPlay: true,
    //         poster: "",
    //         preload: true,
    //         muted: true,
    //       }
        
    // }
} as Meta;
const videoProps = {
    // src: "https://www.w3schools.com/html/mov_bbb.mp4",
    autoPlay: true,
    poster: "",
    preload: true,
    muted: true,
  }
const Template: Story<VideoCardProps> = (args) => <Template {...args} />
export const Default = Template.bind({})
Default.args={
    label:"Düsseldorf Auobahn",
    headerStatus:"live",
    videoStatus:"recording",
    ...videoProps,
    handleClickHD:()=>true,
    handleClickSD:()=>true
}
// export const TestIt =()=> <VideoCard  
//                             label="Düsseldorf Auobahn" 
//                             headerStatus="live"
//                             videoStatus="recording" 
//                             {...videoProps}
//                             handleClickHD={()=>true} 
//                             handleClickSD={()=>true}/>