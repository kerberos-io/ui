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
export const WithLandingLayout = () => <LandingLayout>Landing</LandingLayout>
export const LandingWithLoginCard = () => <LandingLayout>
                                            <LoginCard/>
                                        </LandingLayout>

export const LandingWithSignupCard = () =><LandingLayout>
                                            <SignupCard/>
                                        </LandingLayout>

