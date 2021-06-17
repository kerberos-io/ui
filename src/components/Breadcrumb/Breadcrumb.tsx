import React from "react";
import "./breadcrumb.scss";

export interface BreadcrumbProps {
    title: string,
    level1?: string,
    level1Link?: string,
    level2?: string,
    level2Link?: string,
    level3?: string,
    level3Link?: string,
    children?: any,
};

/**
 * Primary UI component for user interaction
 */
const Breadcrumb = ({
                    title,
                    level1 = "",
                    level1Link = "",
                    level2 = "",
                    level2Link = "",
                    level3 = "",
                    level3Link = "",
                    children,
                }: BreadcrumbProps) => {
    return (
        <header className={"breadcrumb"}>
            <div className='row'>
                <div className="page-title">
                    <h1>
                        { title }
                    </h1>
                    <div className="submenu">
                        { level1 && <div className={"item level2 active"}>
                            { level1Link !== "" && <a>{ level1 } </a> }
                            { level1Link === "" && <span>{ level1 }</span> }
                        </div> }
                        { level2 && <div className={"item level2"}>
                            { level2Link !== "" && <a>{ level2 }</a> }
                            { level2Link === "" &&  <span>{ level2 }</span> }
                        </div> }
                    </div>
                </div>
                <div className="actions">
                    { children }
                </div>
            </div>
        </header>
    );
};

export default Breadcrumb;
