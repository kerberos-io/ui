import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { MainPage } from './MainPage';
import { LoginPage } from './LoginPage';
import { LandingLayout } from './LandingLayout';
import { LoginCard } from './LoginCard';
import { SignupCard } from './SignupCard';
export default {
    title: "Components/Main",
} as Meta;

export const Main = () => MainPage();
export const WithLandingLayout = () => <LandingLayout>Landing</LandingLayout>
export const LandingWithLoginCard = () => <LandingLayout>
                                            <LoginCard/>
                                        </LandingLayout>

export const LandingWithSignupCard = () =><LandingLayout>
                                            <SignupCard/>
                                        </LandingLayout>

