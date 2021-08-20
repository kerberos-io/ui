import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../Button";
import {Input} from "../Input";
import {Modal, ModalProps } from "./Modal";
import {ModalHeader, ModalHeaderProps } from "./ModalHeader";
import {ModalBody, ModalBodyProps } from "./ModalBody";
import {ModalFooter, ModalFooterProps } from "./ModalFooter";

export default {
    title: "Components/Modal",
    component: Modal,
} as Meta;


export const Default = () =><Modal direction="left">
    <ModalHeader title={"Add integration"} onClose={()=>alert("closing")}/>
    <ModalBody>
        <h1>Select Integration</h1>
        <Input
            label= "username or email"
            readonly={false}
            disabled={false}
            iconleft="accounts"
            placeholder="Your username/email"
            // value=""
            type="text"
        />
        <Button label={"Add integration"} icon={"plus-circle"} type={"submit"} />
    </ModalBody>
    <ModalFooter
        right={<Button label={"Add integration"} icon={"plus-circle"} type={"submit"} />}
    />
</Modal>
