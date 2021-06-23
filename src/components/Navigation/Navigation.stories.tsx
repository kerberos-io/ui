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

export const NavigationWithItems = () => <Navigation>
    <NavigationSection title={"monitoring"}/>
    <NavigationGroup>
        <NavigationItem link={"dashboard"} title={"Dashboard"} icon={"dashboard"} active={true}/>
        <NavigationItem link={"events"} title={"Latest events"} icon={"activity"}/>
        <NavigationItem link={"livestream"} title={"Livestreams"} icon={"livestream"}/>
        <NavigationItem link={"media"} title={"Media"} icon={"media"}/>
    </NavigationGroup>
    <NavigationSection title={"analysis"}/>
    <NavigationGroup>
        <NavigationItem link={"tasks"} title={"Tasks"} icon={"tasks"}/>
    </NavigationGroup>
    <NavigationSection title={"integrations"}/>
    <NavigationGroup>
        <NavigationItem link={"alerts"} title={"Alerts"} icon={"alerts"}/>
        <NavigationItem link={"channels"} title={"Channels"} icon={"channels"}/>
    </NavigationGroup>
    <NavigationSection title={"management"}/>
    <NavigationGroup>
        <NavigationItem link={"cameras"} title={"Cameras"} icon={"cameras"}/>
        <NavigationItem link={"sites"} title={"Sites"} icon={"sites"}/>
        <NavigationItem link={"accounts"} title={"Accounts"} icon={"accounts"}/>
        <NavigationItem link={"subscription"} title={"Plans & integrations"} icon={"subscription"}/>
    </NavigationGroup>
</Navigation>
