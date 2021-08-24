import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../Button";
import Icon from "../Icon";
import {Input} from "../Input";
import {Dropdown} from "../Dropdown";
import {Modal, ModalProps } from "./Modal";
import {ModalHeader, ModalHeaderProps } from "./ModalHeader";
import {ModalBody, ModalBodyProps } from "./ModalBody";
import {ModalFooter, ModalFooterProps } from "./ModalFooter";

export default {
    title: "Components/Modal",
    component: Modal,
} as Meta;


export const Default = () =><Modal>
    <ModalHeader title={"Add integration"} onClose={()=>alert("closing")}/>
    <ModalBody>
        { /* Select an integration */ }
        <div className={"grid-container --two-columns"}>
            <div className={"block"}>
                <div className={"title"}>
                    <Icon label={"counting"}/>
                    <h1>Select Integration</h1>
                </div>
                <Dropdown direction="right" icon={"location"} placeholder={"Select sites"} items={[
                    {label: "Hannver, Germany", value: "Hannver, Germany"},
                    {label: "Düsseldorf, Germany", value: "Düsseldorf, Germany"},
                    {label: "FC Bayern Munich, Germany", value: "FC Bayern Munich, Germany"},
                    {label: "Berlin, Germany", value: "Berlin, Germany"}
                ]}/>
            </div>
        </div>

        { /* Once an integration is selected, provide the connection details */ }
        <div className={"grid-container --two-columns"}>
            <div className={"block"}>
                <div className={"title"}>
                    <Icon label={"info"}/>
                    <h1>Connection details</h1>
                </div>
                <Input
                    label={"Integration name"}
                    placeholder={"Provide a good name"}
                    type={"text"} />
                <Input
                    label={"Region"}
                    placeholder={"The region where you consume SQS"}
                    type={"text"} />
                <Input
                    label={"Topic"}
                    placeholder={"The topic name to which messages will be send"}
                    type={"text"} />
            </div>

            { /* AWS SQS credentials */ }
            <div className={"block"}>
                <div className={"title"}>
                    <Icon label={"lock"}/>
                    <h1>AWS credentials</h1>
                </div>
                <p>To connect your AWS SQS queue, make sure <a href={"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html#sqs-getting-access-key-id-secret-access-key"} target={"_blank"}>you have created an IAM user</a> through the AWS console, and given it the correct permissions.</p>
                <Input
                    label={"Access key"}
                    placeholder={"Retrieve the access key from your IAM user"}
                    type={"text"} />
                <Input
                    label={"Secret access key"}
                    placeholder={"Retrieve the secret access key from your IAM user"}
                    type={"text"} />
            </div>
        </div>
    </ModalBody>
    <ModalFooter
        right={<>
            <Button label={"Validate"} icon={"verify"} type={"neutral"}  buttontype={"submit"} />
            <Button label={"Add integration"} icon={"plus-circle"} type={"submit"} buttontype={"submit"} />
        </>}
    />
</Modal>
