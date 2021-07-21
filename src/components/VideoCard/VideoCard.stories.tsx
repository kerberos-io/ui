import React from "react";
import { Meta } from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import VideoCard,{VideoCardProps} from "./VideoCard";

export default {
    title:"Components/VideoCard",
    component:VideoCard
} as Meta;
const videoProps = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    autoPlay: true,
    poster: "",
    preload: true,
    muted: true,
  }
const Template: Story<VideoCardProps> = (args) => <VideoCard {...args} />
export const Embedded = Template.bind({})
Embedded.args={
    label:"Düsseldorf Autobahn",
    headerStatus:"alert",
    headerStatusTitle:"event-detected",
    videoStatus:"recording",
    videoStatusTitle:"live",
    isOffline:false,
    isVideoWall:false,
    isMediaWall:false,
    videoSrc:"https://www.w3schools.com/html/mov_bbb.mp4",
    // camera:"Camera 5-Inside",
    // videoPoster:"",
    // duration:"5:45",
    // month:"Mar 26",
    // hours:"17:35 - 17:36",
    handleClickHD:()=>true,
    handleClickSD:()=>true
}

export const VideoWall = Template.bind({})
VideoWall.args={
    // label:"Düsseldorf Autobahn",
    // headerStatus:"alert",
    // headerStatusTitle:"event-detected",
    videoStatus:"recording",
    videoStatusTitle:"live",
    isOffline:false,
    isVideoWall:true,
    isMediaWall:false,
    camera:"Camera 12-Outside",
    videoSrc:"https://www.w3schools.com/html/mov_bbb.mp4",
    // videoPoster:"https://www.w3schools.com/html/mov_bbb.mp4",
    // duration:"5:45",
    // month:"Mar 26",
    // hours:"17:35 - 17:36",
    // handleClickHD:()=>true,
    // handleClickSD:()=>true
}

export const MediaWall = Template.bind({})
MediaWall.args={
    // label:"Düsseldorf Autobahn",
    // headerStatus:"alert",
    // headerStatusTitle:"event-detected",
    // videoStatus:"recording",
    // videoStatusTitle:"live",
    // camera:"Cam 8-Outside",
    // videoPoster:"",
    isOffline:false,
    isVideoWall:false,
    isMediaWall:true,
    videoSrc:"https://www.w3schools.com/html/mov_bbb.mp4",
    duration:"5:45",
    month:"Mar 26",
    hours:"17:35 - 17:36",
    // handleClickHD:()=>true,
    // handleClickSD:()=>true
}