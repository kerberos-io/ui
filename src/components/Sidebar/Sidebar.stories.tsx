import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import Profilebar from "../Profilebar";
import { Navigation, NavigationGroup, NavigationItem, NavigationSection } from "../Navigation";

export default {
    title: "Components/Sidebar",
    component: Sidebar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { title: "Kerberos.io", version: "v1.0" };

export const Version = Template.bind({});
Version.args = { ...Default.args, title: "Kerberos Agent", version: "v1-beta" };

export const WithProfileBar = () => <Sidebar title="Kerberos.io" version="v3.0">
    <Profilebar
        username={"cedricve"}
        email={"cedric@kerberos.io"}
        role={"owner"}
    />
</Sidebar>


export const WithActiveProfileBar = () => <Sidebar title="Kerberos.io" version="v3.0">
    <Profilebar
        username={"cedricve"}
        email={"cedric@kerberos.io"}
        role={"owner"}
        active={true}
    />
</Sidebar>


export const WithNavigation = () => <Sidebar title="Kerberos.io" version="v3.0">
    <Profilebar
        username={"cedricve"}
        email={"cedric@kerberos.io"}
        role={"owner"}
        active={true}
    />
    <Navigation>
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
</Sidebar>
