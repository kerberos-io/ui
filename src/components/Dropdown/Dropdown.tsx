import React from "react";
import Icon from "../Icon";
import { Input } from "../Input";
import { DropList } from "./DropList";
const { useState, useRef, useEffect } = React;
import "./dropdown.scss";

export interface DropdownProps  {
    placeholder:string,
    icon:string,
    items: any,
    direction:"left"|"right",
    search?:boolean,
    style?: "form" | "controlbar";
    isRadio?:boolean,
    onChange: any,
};

export const Dropdown = ({
    placeholder,
    icon,
    items,
    direction,
    search=true,
    style = "form",
    isRadio=false,
    onChange }: DropdownProps) => {

    const searchedValues = [];
    const [searchValue, setSearch] = useState("");
    const [values, selectValues] = useState([]);
    const [check, setCheck] = useState(false);
    const toggleChecked = () => setCheck(value => !value);
    const node = useRef() as React.MutableRefObject<HTMLInputElement>;
    const handleClick = (e:any) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setSearch("")
        setCheck(false);
    };

    const onlyUnique = (value: any, index: any, self: any) => {
        return self.indexOf(value) === index;
    }

    const onSelectValue = (e: any) => {
        if(!isRadio) {
            let selectedValues: any = [...values];
            const {checked, value} = e.target
            if (checked) {
                selectedValues.push(value)
            } else {
                selectedValues = selectedValues.filter((v: any, index: any, arr: any) => {
                    return v !== value;
                });
            }
            const uniqueValues = selectedValues.filter(onlyUnique);
            selectValues(uniqueValues);
            if (onChange) {
                onChange(uniqueValues)
            }
        } else {
            const {value} = e.target
            const values: any = [value];
            selectValues(values);
            if (onChange) {
                onChange(values)
            }
        }
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    let valuesString = "";
    if(values.length == 1) {
        valuesString = values[0];
    } else if (values.length > 1) {
        valuesString = values[0] + ", +" + (values.length-1).toString();
    }
    return (
        <div className={"dropdown-container"} ref={node}>
            <div className={"input"}>
                <Input
                    onClick={toggleChecked}
                    iconleft={icon}
                    iconright={"arrow-down-sm"}
                    readonly={true}
                    style={style}
                    placeholder={placeholder}
                    value={valuesString}/>
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
                            onChange={(e: any) => {
                                const {value} = e.target;
                                setSearch(value)
                            }}
                            placeholder="Search..."
                            seperate
                            type="text"
                            />
                     </li>
                     :null
                  }
                   {items.filter((i: any) => (!searchValue || searchValue ==="") || searchValue && searchValue !=="" && (i.label.indexOf(searchValue) > -1 || i.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)).map((i:any) => {
                       return <DropList key={i.value} icon={icon} radio={isRadio} title={i.label} value={i.value} checked={values.find((v:any) => v === i.value)} onChange={onSelectValue} />
                   })}

                </ul>
            </div> }
        </div>
    );
};

