import React from "react";
import { DropList } from ".";
import Icon from "../Icon";
import { Input } from "../Input";
const { useState, useRef, useEffect } = React;
import "./dropdown.scss";

export interface DropdownProps  {
    children?:any,
    direction:"left"|"right",
    search?:boolean,
    selectOne?:boolean,
};

export const Dropdown = ({
    children,
    direction,
    search=true,
    selectOne=false
 }: DropdownProps) => {

    const [state, setState] = useState({
        check:false,
        titleArr:[] as any,
        count:0,
        changeValue:""


    });
    const toggleChecked = () => setState(preS => ({...preS,check:!preS.check}));
    const node = useRef();
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setState(preS => ({...preS,check:false}));
    };

    const handleChange=(e:any)=>{
        e.preventDefault()
        setState(preS => ({
            ...preS,
            changeValue:e.target.value,
            }))
    }

    const Childrens=React.Children.map(children,(child,ind)=>{

            const childRef =React.useRef() as any;           
            const {title} = child.props                         
        
            const handleSelect=(e:any)=>  {

            const input=childRef.current.querySelector("input")

            // İf there is no input ,for instance in language selection
            !selectOne ? (
                input.checked ? setState(preS => ({
                    ...preS,
                    count:preS.count-1,
                    titleArr:preS.titleArr.filter(tt=>tt!=title)
    
                }))  : setState(preS => ({
                    ...preS,
                    count:preS.count+1,
                    titleArr:preS.titleArr.concat(title)
                }))
            // For language selection
            ) : setState(preS => ({
                ...preS,
                titleArr:Array(title),
                }))
            }
            
            return (
                title.includes(state.changeValue) ? <div ref={childRef} onClick={handleSelect} >{child}</div> : null
            )
    })
    

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
                    placeholder={state.titleArr[0]+`${state.count>1?" + "+(state.count-1):""}`}/>
            </div>
            {/* Made it display:none to keep the data when dropdown closed */}
            { <div style={{display:state.check?"block":"none"}} className={`dropdown ${direction==="left"?"left":"right"}`}>
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
                            onChange={handleChange}
                            placeholder="Search..."
                            seperate
                            type="text"
                            />
                     </li>
                     :null
                  }
                  {Childrens}

                </ul>
            </div> }
        </div>
    );
};

