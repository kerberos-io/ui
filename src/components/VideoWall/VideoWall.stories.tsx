import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import  {VWHeader } from "./VWHeader";
import {VideoWall} from "./VideoWall";
import { VWBody } from "./VWBody";
import { VideoCard } from "../VideoCard";



export default {
    title: "Components/VideoWall",
    component: VideoWall
    
} as Meta;

export const _VideoWall4= ()=> <VideoWall hide={false}>
        <VWHeader grid={[4,9,16]}/>
        <VWBody cols={2}>
                {
                    Array(4).fill(4).map(el =><VideoCard
                        headerStatus=""
                        headerStatusTitle=""
                        camera="Camera 12-Outside"
                        isVideoWall
                        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
                        videoStatus="recording"
                        videoStatusTitle="live"
                        />)
                }
        </VWBody>
</VideoWall>

export const _VideoWall9= ()=> <VideoWall hide={false}>
        <VWHeader grid={[4,9,16]}/>
        <VWBody cols={3}>
                {
                    Array(9).fill(4).map(el =><VideoCard
                        headerStatus=""
                        headerStatusTitle=""
                        camera="Camera 12-Outside"
                        isVideoWall
                        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
                        videoStatus="recording"
                        videoStatusTitle="live"
                        />)
                }
        </VWBody>
</VideoWall>