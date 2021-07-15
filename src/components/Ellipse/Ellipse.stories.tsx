import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import Ellipse, {EllipseProps} from "./Ellipse";

export default {
    title:"Components/Ellipse",
    component:Ellipse
 } as Meta

const Template: Story<EllipseProps>=(args)=><Ellipse {...args} />
export const Default = Template.bind({})
Default.args={
    color:"hsla(278, 30%, 48%, 1)"
    
}
export const WithAllProps = Template.bind({})

WithAllProps.args={
    color:"hsla(278, 30%, 48%, 1)",
    halo:"hsla(278, 30%, 48%, 1)",
    blink:true
    
}
