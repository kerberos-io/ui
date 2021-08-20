import React from "react";
import Icon from "../Icon";
import { Input } from "../Input";
const { useState, useRef, useEffect } = React;
import "./modal.scss";

export interface ModalProps  {
    children:any,
    direction:"left"|"right",
    search?:boolean
};

export const Modal = ({
    children,
    direction,
    search=true }: ModalProps) => {

    const [check, setCheck] = useState(false);
    const toggleChecked = () => setCheck(value => !value);
    const node = useRef() as React.MutableRefObject<HTMLInputElement>;;
    const handleClick = (e:any) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setCheck(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div className={"bg"}>
            <div className={"modal"} ref={node}>
                {children}
            </div>
        </div>
    );
};

