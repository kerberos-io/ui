import React from "react";
import "./navigation.scss";

export interface NavigationSectionProps  {
    title:string;
};

const NavigationSection = ({
                            title,
                        }: NavigationSectionProps) => {

    return <p className="table-header">{title}</p>;
};

export default NavigationSection;
