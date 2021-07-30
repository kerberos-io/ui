import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { MainPage } from './MainPage';
export default {
    title: "Components/Main",
} as Meta;

export const Main = () => MainPage();

