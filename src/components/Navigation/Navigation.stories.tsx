import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navigation, { NavigationProps } from "./Navigation";
import NavigationItem, { NavigationItemProps } from "./NavigationItem";
import NavigationSection, { NavigationSectionProps } from "./NavigationSection";
import NavigationGroup, { NavigationGroupProps } from "./NavigationGroup";
import Button from "../Button";

export default {
    title: "Components/Navigation",
    component: Navigation,
    argTypes: {
        active: {
            control: { type: 'boolean' }
        }
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<NavigationItemProps> = (args) => <NavigationGroup>
    <NavigationItem {...args} />
</NavigationGroup>;

// Reuse that template for creating different stories
export const NavigationItemActive = Template.bind({});
NavigationItemActive.args = { icon: "dashboard", title: "dashboard", active: true };

export const NavigationWithItems = () => <Navigation>
    <NavigationSection title={"monitoring"}/>
    <NavigationGroup>
        <NavigationItem title={"Dashboard"} icon={"dashboard"} active={true}/>
        <NavigationItem title={"Latest events"} icon={"activity"}/>
        <NavigationItem title={"Livestreams"} icon={"livestream"}/>
        <NavigationItem title={"Media"} icon={"media"}/>
    </NavigationGroup>
    <NavigationSection title={"analysis"}/>
    <NavigationGroup>
        <NavigationItem title={"Tasks"} icon={"tasks"}/>
    </NavigationGroup>
    <NavigationSection title={"integrations"}/>
    <NavigationGroup>
        <NavigationItem title={"Alerts"} icon={"alerts"}/>
        <NavigationItem title={"Channels"} icon={"channels"}/>
    </NavigationGroup>
    <NavigationSection title={"management"}/>
    <NavigationGroup>
        <NavigationItem title={"Cameras"} icon={"cameras"}/>
        <NavigationItem title={"Sites"} icon={"sites"}/>
        <NavigationItem title={"Accounts"} icon={"accounts"}/>
        <NavigationItem title={"Plans & integrations"} icon={"subscription"}/>
    </NavigationGroup>
</Navigation>
