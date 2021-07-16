import React from "react";
import TermsOfUse from ".";
import { Meta } from "@storybook/react";

export default {
    title:"Components/TermsOfUse"
} as Meta;
const termsofuse={
    text:`We at Kerberos.io are committed to keeping your data private and protected.
    Due to the changes in the legal environment in the European Union and as a
    part of our continuing effort to improve our service, we have updated our `,
    href:""
}

export const Terms =  () => <TermsOfUse {...termsofuse} />