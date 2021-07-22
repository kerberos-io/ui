import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import  {VWHeader } from "./VWHeader";
import {VideoWall} from "./VideoWall";
import { VWBody } from "./VWBody";



export default {
    title: "Components/VideoWall",
    component: VideoWall
    
} as Meta;

// Create a master template for mapping args to render the Button component
// const Template: Story<VideoWallHeaderProps> = (args) => <VideoWallHeader {...args} />;

// // Reuse that template for creating different stories
// export const Default = Template.bind({});
// Default.args = {  };
const videoProps = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    autoPlay: true,
    poster: "",
    preload: true,
    muted: true,
  }
export const _VideoWall= ()=> <VideoWall>
    <VWHeader grid={[4,9,16,32,45]}/>
    <VWBody>
 
    </VWBody>
</VideoWall>
