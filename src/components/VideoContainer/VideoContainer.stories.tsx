import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import  {VideoWallHeader } from "./VideoWallHeader";
import {VideoContainer} from "./VideoContainer";
import { VideoCard } from "../VideoCard";



export default {
    title: "Components/VideoContainer",
    component: VideoContainer
    
} as Meta;

export const _Embedded= ()=>
<>
 <VideoContainer cols={2} isVideoWall={false} >
{
        Array(4).fill(4).map(el =><VideoCard
        label="Düsseldorf"
        headerStatus="hub"
        headerStatusTitle="Live"
        camera="Camera 12-Outside"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        videoStatus="recording"
        videoStatusTitle="live"
        />)
}
</VideoContainer>
</>

export const _VideoWall= ()=>
<>
<VideoWallHeader hide={false} grid={[4,9,16]}/>
<VideoContainer cols={2} isVideoWall={true} >
{
        Array(9).fill(4).map(el =><VideoCard
        headerStatus="hub"
        headerStatusTitle="Live"
        camera="Camera 12-Outside"
        isVideoWall={true}
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        videoStatus="recording"
        videoStatusTitle="live"
        />)
}
</VideoContainer>
</>

export const _MediaWall= ()=>
 <VideoContainer cols={4} isVideoWall={false} >
{
        Array(9).fill(4).map(el =><VideoCard
        headerStatus="hub"
        headerStatusTitle="Live"
        camera="Camera 12-Outside"
        isVideoWall={false}
        isMediaWall
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        videoStatus="recording"
        videoStatusTitle="live"
        duration="5:45"
        hours="17:35 - 17:36"
        month="Mar 26"
        />)
}
</VideoContainer>