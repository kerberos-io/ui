import React from "react";
import "./icon.scss";

import Accounts from '-!svg-react-loader!./svg/accounts.svg';
import Activity from '-!svg-react-loader!./svg/activity.svg';
import Alerts from '-!svg-react-loader!./svg/alerts.svg';
import Camera from '-!svg-react-loader!./svg/camera.svg';
import Channels from '-!svg-react-loader!./svg/channels.svg';
import Counting from '-!svg-react-loader!./svg/counting.svg';
import Dashboard from '-!svg-react-loader!./svg/dashboard.svg';
import Logout from '-!svg-react-loader!./svg/logout.svg';
import Media from '-!svg-react-loader!./svg/media.svg';
import Play from '-!svg-react-loader!./svg/play.svg';
import Share from '-!svg-react-loader!./svg/share.svg';
import Sites from '-!svg-react-loader!./svg/sites.svg';
import Subscription from '-!svg-react-loader!./svg/subscription.svg';
import Tasks from '-!svg-react-loader!./svg/tasks.svg';
import Watch from '-!svg-react-loader!./svg/watch.svg';

export interface IconProps  {
    label: string;
};

const Icon = ({
                    label,
              }: IconProps) => {
    switch (label){
        case "accounts":
            return <Accounts className={"icon"}/>
        case "activity":
            return <Activity className={"icon"}/>
        case "alerts":
            return <Alerts className={"icon"}/>
        case "camera":
            return <Camera className={"icon"}/>
        case "channels":
            return <Channels className={"icon"}/>
        case "counting":
            return <Counting className={"icon"}/>
        case "dashboard":
            return <Dashboard className={"icon"}/>
        case "logout":
            return <Logout className={"icon"}/>
        case "media":
            return <Media className={"icon"}/>
        case "play":
            return <Play className={"icon"}/>
        case "share":
            return <Share className={"icon"}/>
        case "sites":
            return <Sites className={"icon"}/>
        case "subscription":
            return <Subscription className={"icon"}/>
        case "tasks":
            return <Tasks className={"icon"}/>
        case "watch":
            return <Watch className={"icon"}/>
    }
    return <span></span>;
};

export default Icon
