import React from "react";
import Icon from "../Icon";
import { Input } from "../Input";
const { useState } = React;
import "./dropdown.scss";

export interface DropdownProps  {
    children:any,
    direction:"left"|"right",
    search?:boolean
};

export const Dropdown = ({
    children,
    direction,
    search=true
              }: DropdownProps) => {

    const [check, setCheck] = useState(false);
    const toggleChecked = () => setCheck(value => !value);

    return (
        <div className={"dropdown-container"}>
            <div className={"input"}>
                <Input
                    onBlur={() => setCheck(false)}
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

