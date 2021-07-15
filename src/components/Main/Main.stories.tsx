import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { MainPage } from './stories/MainPage';
import { LoginPage } from './stories/LoginPage';

export default {
    title: "Components/Main",
} as Meta;

export const Main = () => MainPage();
export const Login = () => LoginPage();
