import React from "react";
import "./profilebar.scss";
const md5 = require('md5');

export interface ProfilebarProps  {
    username: string;
    email: string;
    role: string;
    gravatarSize?: string;
    active?: boolean;
    logout?: any;
};

const Profilebar = ({
                    username = "cedricve",
                    email = "cedric@verstraeten.io",
                    role = "owner",
                    gravatarSize = '44',
                    active = false,
                    logout,
                }: ProfilebarProps) => {

    const gravatar: string = 'https://www.gravatar.com/avatar/' + md5(email) + '?s=' + gravatarSize + '&d=mm';

    return (
        <div className={"profile-bar"}>
            <p className="table-header">Profile</p>
            <div className={`user ${active ? 'is-active' : ''}`}>
                <img src={gravatar} className="photo" alt={email} />
                <div className="user-info">
                  <div className="username">{username}</div>
                  <small className="role">{role}</small>
                </div>
                <div className="logout" title="Log out" onClick={logout}>
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16L9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14L11 17C11 17.5523 10.5523 18 10 18L1 18C0.734783 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 3.21184e-08 17.2652 4.37114e-08 17L7.43094e-07 1C7.67235e-07 0.447715 0.447716 -4.61255e-07 1 -4.37114e-07L10 -4.37114e-08C10.5523 -1.95703e-08 11 0.447716 11 1L11 4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55229 9 4L9 2L2 2L2 16L9 16Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 8.44772 4.44772 8 5 8L17 8C17.5523 8 18 8.44771 18 9C18 9.55228 17.5523 10 17 10L5 10C4.44772 10 4 9.55228 4 9Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289Z"/>
                    </svg>
                </div>
            </div>
        </div>);
};

export default Profilebar;
