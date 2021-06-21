import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Main from "./Main";
import MainBody from "./MainBody";
import Sidebar from "../Sidebar";
import Profilebar from "../Profilebar";
import Gradient from "../Gradient";
import Breadcrumb from "../Breadcrumb";
import Button from "../Button";
import { Navigation, NavigationGroup, NavigationItem, NavigationSection } from "../Navigation";

export default {
    title: "Components/Main",
} as Meta;

export const Fullpage = () =>
    <div id={"page-root"}>
        <Sidebar title="Kerberos.io" version="v3.0">
            <Profilebar
                username={"cedricve"}
                email={"cedric@kerberos.io"}
                role={"owner"}
                active={true}
            />
            <Navigation>
                <NavigationSection title={"monitoring"}/>
                <NavigationGroup>
                    <NavigationItem title={"Dashboard"} icon={"dashboard"} link={"yolo"} active={true}/>
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
        </Sidebar>
        <Main>
            <Gradient/>
            <MainBody>
                <Breadcrumb title={"Dashboard"} level1={"Get an overview"} level2={"All sites"}>
                    <Button label={"Create media"} icon={"media"}/>
                </Breadcrumb>
            </MainBody>
        </Main>
    </div>



