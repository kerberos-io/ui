import React from "react";
import Icon from "../Icon";
import { Input } from "../Input";
const { useState, useRef, useEffect } = React;
import "./dropdown.scss";

export interface DropdownProps  {
    children:any,
    direction:"left"|"right",
    search?:boolean
};

export const Dropdown = ({
    children,
    direction,
    search=true }: DropdownProps) => {

    const [check, setCheck] = useState(false);
    const toggleChecked = () => setCheck(value => !value);
    const node = useRef();
    const handleClick = e => {
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
        <div className={"dropdown-container"} ref={node}>
            <div className={"input"}>
                <Input
                    onClick={toggleChecked}
                    iconleft={"location"}
                    iconright={"arrow-down-sm"}
                    readonly={true}
                    placeholder={"lol"}/>
            </div>
            { check && <div className={`dropdown ${direction==="left"?"left":"right"}`}>
                <div id="arrow-up">
                    <Icon label="arrow-up" />
                </div>
                <ul>
                  {
                      search ?
                      <li className="search-input">
                        <Input
                            hint=""
                            iconleft="search"
                            iconright=""
                            label=""
                            onChange={() => {}}
                            placeholder="Search..."
                            seperate
                            type="text"
                            />
                     </li>
                     :null
                  }
                   {children}

                </ul>
            </div> }
        </div>
    );
};

