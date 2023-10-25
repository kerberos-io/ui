import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import LandingLayout, {LandingLayoutProps } from "./LandingLayout";
import { WithLogin as LoginCard,WithSignUp as SignupCard} from "../Block/Block.stories";

export default {
    title: "Components/LandingLayout",
    component: LandingLayout,
} as Meta;

export const Default = () => <LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">Content comes here as children</LandingLayout>
export const WithLoginCard = () => <LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">
                                            <div style={{display:"flex",justifyContent:"center",marginBottom:"120px"}}>
                                            <LoginCard/>
                                            </div>
                                        </LandingLayout>

export const WithSignupCard = () =><LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">
                                            <div style={{display:"flex",justifyContent:"center",marginBottom:"120px"}}>
                                            <SignupCard/>
                                            </div>
                                        </LandingLayout>



export const WithSignupCardWithoutFooter = () =><LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services" hideFooter={true}>
                                            <div style={{display:"flex",justifyContent:"center",marginBottom:"120px"}}>
                                            <SignupCard/>
                                            </div>
                                        </LandingLayout>

