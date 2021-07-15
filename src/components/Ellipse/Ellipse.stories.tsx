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

}
export const WithSuccessStatus = Template.bind({})
WithSuccessStatus.args={
    status:"success",
    
}
export const WithAlertStatus = Template.bind({})
WithAlertStatus.args={
    status:"alert",
}

export const WithWarningStatus = Template.bind({})
WithWarningStatus.args={
    status:"warning",
}
