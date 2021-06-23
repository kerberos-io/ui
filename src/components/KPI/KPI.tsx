import React from "react";
import Icon from "../Icon";
import "./kpi.scss";

export interface KPIProps  {
    number?: string;
    divider?: string;
    progress?: string;
    progressValue?: string;
    footer?: string;
};

const KPI = ({
                 number = "",
                 divider = "",
                 progress = "",
                 progressValue = "",
                 footer = ""
            }: KPIProps) => {
    return (
        <div className="kpi">

            { number === "" && divider === "" && <div className="card is-loading">
                    <div className="title">
                        <div className="body"></div>
                    </div>
                    <div className="footer"></div>
                </div>
            }

            { number !== "" && divider !== "" && <div className="card">
                    <div className="title">
                        <div>
                            { divider !== "0" && <div className="number-divider">
                                {number}<span>/{divider}</span>
                            </div> }
                            { divider === "0" && <div className="number-divider">
                                {number}
                            </div> }
                            <div className="progress">
                                { progress == '+' &&
                                    <span className="green">+{progressValue}</span>
                                }
                                { progress == '-' &&
                                    <span className="red">-{progressValue}</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="bullet"></div>
                        { footer }
                    </div>
                </div>
            }

        </div>
    );
};

export default KPI;
