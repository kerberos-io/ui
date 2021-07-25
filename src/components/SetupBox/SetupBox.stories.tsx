import React from "react";
import { Meta } from "@storybook/react/types-6-0"
import {Story} from "@storybook/react";
import SetupBox, { SetupBoxProps } from "./SetupBox";

export default {
    title:"Components/SetupBox",
    component:SetupBox

} as Meta

const Template:Story<SetupBoxProps> = (args)=><SetupBox {...args} />
export const AsOfflineCard = Template.bind({})

AsOfflineCard.args={
        header:"Camera Offline",
        text:"Camera offlineCamera is not powered or not connected to the network.Check your camera to re-enable live stream and event recording.",
        btnicon:"cameras",
        btnlabel:"Manage Cameras",
        dashed:false
}

export const AsDashedBox = Template.bind({})

AsDashedBox.args={
    header:"Setup your first Connection",
    text:"To use Kerberos Hub Lite, first you need to configure your camera settings – Kerberos supports wide range of USB, IP and RPi cameras",
    btnicon:"cameras",
    btnlabel:"Add a Connection",
    dashed:true
}

