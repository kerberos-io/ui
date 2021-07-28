import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { MainPage } from './MainPage';
import { LandingLayout } from './LandingLayout';
import { LoginCard } from '../Cards';
import { SignupCard } from '../Cards';
export default {
    title: "Components/Main",
} as Meta;

export const Main = () => MainPage();
export const WithLandingLayout = () => <LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">Landing</LandingLayout>
export const LandingWithLoginCard = () => <LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">
                                            <LoginCard/>
                                        </LandingLayout>

export const LandingWithSignupCard = () =><LandingLayout title="Kerberos Hub" version="v3.0" description="Control panel and management for all Kerberos services">
                                            <SignupCard/>
                                        </LandingLayout>

