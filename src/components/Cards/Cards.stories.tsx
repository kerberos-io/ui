import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LoginCard } from "./LoginCard";
import { SignupCard } from "./SignupCard";

export default {
    title: "Components/Cards",
} as Meta;

export const Login = () => <LoginCard/>
export const Signup = () => <SignupCard/>