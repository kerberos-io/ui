import React from "react";
import "./icon.scss";

export interface IconProps  {
    label: string;
};

export function Accounts(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6C10.1046 6 11 5.10457 11 4C11 2.89543 10.1046 2 9 2ZM5 4C5 1.79086 6.79086 0 9 0C11.2091 0 13 1.79086 13 4C13 6.20914 11.2091 8 9 8C6.79086 8 5 6.20914 5 4Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9981 11.3995C5.29471 9.88675 7.08937 9 9 9C10.9106 9 12.7053 9.88675 14.0019 11.3995C15.2944 12.9074 16 14.9238 16 17C16 17.5523 15.5523 18 15 18L3 18C2.44772 18 2 17.5523 2 17C2 14.9238 2.70558 12.9074 3.9981 11.3995ZM9 11C7.72803 11 6.47044 11.5882 5.51662 12.701C4.75666 13.5877 4.24797 14.743 4.07017 16L13.9298 16C13.752 14.743 13.2433 13.5877 12.4834 12.701C11.5296 11.5882 10.272 11 9 11Z" fill="currentColor"/>
        </svg>
    )
}

export function Activity(){
    return (<></>)
}

export function Alerts(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C6.79086 4 5 5.79086 5 8V12H13V8C13 5.79086 11.2091 4 9 4ZM3 8C3 4.68629 5.68629 2 9 2C12.3137 2 15 4.68629 15 8V14H3V8Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2321 15.134C11.7104 15.4102 11.8743 16.0218 11.5981 16.5C11.3348 16.9561 10.9561 17.3348 10.5 17.5981C10.044 17.8614 9.52665 18 9.00004 18C8.47343 18 7.9561 17.8614 7.50004 17.5981C7.04398 17.3348 6.66527 16.9561 6.40196 16.5C6.12582 16.0218 6.2897 15.4102 6.76799 15.134C7.24628 14.8579 7.85787 15.0218 8.13401 15.5C8.22178 15.6521 8.34802 15.7783 8.50004 15.8661C8.65206 15.9538 8.8245 16 9.00004 16C9.17558 16 9.34802 15.9538 9.50004 15.8661C9.65206 15.7783 9.7783 15.6521 9.86607 15.5C10.1422 15.0218 10.7538 14.8579 11.2321 15.134Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13C2 12.4477 2.44772 12 3 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H3C2.44772 14 2 13.5523 2 13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C9.55228 0 10 0.447715 10 1V2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2V1C8 0.447715 8.44772 0 9 0Z" fill="currentColor"/>
        </svg>
    )
}

export function Cameras(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10L3 10C2.44772 10 2 9.55228 2 9L2 6.81819C2 5.91846 2.18279 5.02831 2.53711 4.19884C2.89139 3.36945 3.40981 2.61787 4.06121 1.98621C4.71255 1.3546 5.48415 0.85516 6.33118 0.514938C7.17817 0.174736 8.08494 -2.61718e-07 9 -3.41715e-07C9.91505 -4.21712e-07 10.8218 0.174736 11.6688 0.514938C12.5159 0.855159 13.2874 1.3546 13.9388 1.98621C14.5902 2.61787 15.1086 3.36944 15.4629 4.19884C15.8172 5.02831 16 5.91846 16 6.81819L16 9C16 9.26522 15.8946 9.51957 15.7071 9.70711ZM14 8L14 6.81819C14 6.1898 13.8724 5.5668 13.6237 4.98448C13.3749 4.40209 13.0094 3.87088 12.5465 3.42201C12.0835 2.97307 11.5323 2.61539 10.9234 2.37083C10.3145 2.12625 9.66081 2 9 2C8.33919 2 7.68554 2.12625 7.07662 2.37083C6.46775 2.61539 5.91647 2.97307 5.45351 3.42201C4.99061 3.87088 4.62511 4.40209 4.37634 4.98448C4.1276 5.5668 4 6.1898 4 6.81819L4 8L14 8Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 8.44772 2.44772 8 3 8H15C15.5523 8 16 8.44772 16 9V12C16 12.5523 15.5523 13 15 13H3C2.44772 13 2 12.5523 2 12V9ZM4 10V11H14V10H4Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 11.8954 0.895431 11 2 11H16C17.1046 11 18 11.8954 18 13V17C18 17.5523 17.5523 18 17 18H1C0.447715 18 0 17.5523 0 17V13ZM16 13H2V16H16V13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7Z" fill="currentColor"/>
        </svg>
    )
}

export function Channels(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5019 0.13509C17.8102 0.314012 18 0.64353 18 1V15C18 15.3565 17.8102 15.686 17.5019 15.8649C17.1936 16.0438 16.8134 16.0451 16.5039 15.8682L9.6837 11.971L0.889568 10.9939C0.383136 10.9376 0 10.5095 0 10V6C0 5.49045 0.383136 5.06239 0.889568 5.00612L9.6837 4.02899L16.5039 0.131757C16.8134 -0.045102 17.1936 -0.043832 17.5019 0.13509ZM16 2.72318L10.4961 5.86824C10.3775 5.93603 10.2462 5.97879 10.1104 5.99388L2 6.89504V9.10496L10.1104 10.0061C10.2462 10.0212 10.3775 10.064 10.4961 10.1318L16 13.2768V2.72318Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4.55228 5 5 5.44772 5 6V10.3496L6.73857 16H7V11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11V17C9 17.5523 8.55228 18 8 18H6C5.561 18 5.17333 17.7137 5.04422 17.2941L3.04422 10.7941C3.01491 10.6988 3 10.5997 3 10.5V6C3 5.44772 3.44772 5 4 5Z" fill="currentColor"/>
        </svg>
    )
}

export function Counting(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6C3.55228 6 4 5.55228 4 5C4 4.44772 3.55228 4 3 4ZM0 5C0 3.34315 1.34315 2 3 2C4.65685 2 6 3.34315 6 5C6 6.65685 4.65685 8 3 8C1.34315 8 0 6.65685 0 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6C7.55228 6 8 5.55228 8 5C8 4.44772 7.55228 4 7 4ZM4 5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5C10 6.65685 8.65685 8 7 8C5.34315 8 4 6.65685 4 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4ZM8 5C8 3.34315 9.34315 2 11 2C12.6569 2 14 3.34315 14 5C14 6.65685 12.6569 8 11 8C9.34315 8 8 6.65685 8 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12ZM12 13C12 11.3431 13.3431 10 15 10C16.6569 10 18 11.3431 18 13C18 14.6569 16.6569 16 15 16C13.3431 16 12 14.6569 12 13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14C3.55228 14 4 13.5523 4 13C4 12.4477 3.55228 12 3 12ZM0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12ZM8 13C8 11.3431 9.34315 10 11 10C12.6569 10 14 11.3431 14 13C14 14.6569 12.6569 16 11 16C9.34315 16 8 14.6569 8 13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12 4.44772 12.4477 4 13 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H13C12.4477 6 12 5.55228 12 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 12.4477 4.44772 12 5 12H9C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14H5C4.44772 14 4 13.5523 4 13Z" fill="currentColor"/>
        </svg>
    )
}

export function Dashboard(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.55228 0 6 0.447715 6 1V7C6 7.55228 5.55228 8 5 8H1C0.447715 8 0 7.55228 0 7V1ZM2 2V6H4V2H2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 10.4477 0.447715 10 1 10H8C8.55228 10 9 10.4477 9 11V17C9 17.5523 8.55228 18 8 18H1C0.447715 18 0 17.5523 0 17V11ZM2 12V16H7V12H2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C8 0.447715 8.44772 0 9 0H17C17.5523 0 18 0.447715 18 1V7C18 7.55228 17.5523 8 17 8H9C8.44772 8 8 7.55228 8 7V1ZM10 2V6H16V2H10Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11C11 10.4477 11.4477 10 12 10H17C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H12C11.4477 18 11 17.5523 11 17V11ZM13 12V16H16V12H13Z" fill="currentColor"/>
        </svg>
    )
}

export function Logout(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16L9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14L11 17C11 17.5523 10.5523 18 10 18L1 18C0.734783 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 3.21184e-08 17.2652 4.37114e-08 17L7.43094e-07 1C7.67235e-07 0.447715 0.447716 -4.61255e-07 1 -4.37114e-07L10 -4.37114e-08C10.5523 -1.95703e-08 11 0.447716 11 1L11 4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55229 9 4L9 2L2 2L2 16L9 16Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 8.44772 4.44772 8 5 8L17 8C17.5523 8 18 8.44771 18 9C18 9.55228 17.5523 10 17 10L5 10C4.44772 10 4 9.55228 4 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289Z" fill="currentColor"/>
        </svg>
    )
}

export function Media(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 1.44772 0.447715 1 1 1H17C17.5523 1 18 1.44772 18 2V16C18 16.5523 17.5523 17 17 17H1C0.447715 17 0 16.5523 0 16V2ZM2 3V15H16V3H2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H17C17.5523 4 18 4.44772 18 5V13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13V5ZM2 6V12H16V6H2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13V5H7L7 13H5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5V2H5V5H4Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16V13H5V16H4Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V2H8V5H7Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16V13H8V16H7Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5V2H11V5H10Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16V13H11V16H10Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5V2H14V5H13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16V13H14V16H13Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V5H14V13H12Z" fill="currentColor"/>
        </svg>
    )
}

export function Livestream(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 9.35126 12.8157 9.67677 12.5145 9.85749L7.5145 12.8575C7.20557 13.0429 6.82081 13.0477 6.5073 12.8702C6.19379 12.6927 6 12.3603 6 12L6 6C6 5.63973 6.19379 5.30731 6.5073 5.1298C6.82081 4.95229 7.20557 4.95715 7.5145 5.14251L12.5145 8.14251C12.8157 8.32323 13 8.64874 13 9ZM8 7.76619L8 10.2338L10.0563 9L8 7.76619Z" fill="currentColor"/>
        </svg>
    )
}

export function Share(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2ZM0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C2.89543 12 2 12.8954 2 14C2 15.1046 2.89543 16 4 16C5.10457 16 6 15.1046 6 14C6 12.8954 5.10457 12 4 12ZM0 14C0 11.7909 1.79086 10 4 10C6.20914 10 8 11.7909 8 14C8 16.2091 6.20914 18 4 18C1.79086 18 0 16.2091 0 14Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.3431 6 10 7.34315 10 9C10 10.6569 11.3431 12 13 12C14.6569 12 16 10.6569 16 9C16 7.34315 14.6569 6 13 6ZM8 9C8 6.23858 10.2386 4 13 4C15.7614 4 18 6.23858 18 9C18 11.7614 15.7614 14 13 14C10.2386 14 8 11.7614 8 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99618 11.8683L6.49618 13.8683L5.50391 12.1318L9.00391 10.1318L9.99618 11.8683Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98547 7.85756L3.98547 4.85756L5.01447 3.14258L10.0145 6.14258L8.98547 7.85756Z" fill="currentColor"/>
        </svg>
    )
}

export function Sites(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 9.35126 12.8157 9.67677 12.5145 9.85749L7.5145 12.8575C7.20557 13.0429 6.82081 13.0477 6.5073 12.8702C6.19379 12.6927 6 12.3603 6 12L6 6C6 5.63973 6.19379 5.30731 6.5073 5.1298C6.82081 4.95229 7.20557 4.95715 7.5145 5.14251L12.5145 8.14251C12.8157 8.32323 13 8.64874 13 9ZM8 7.76619L8 10.2338L10.0563 9L8 7.76619Z" fill="currentColor"/>
        </svg>
    )
}

export function Subscription(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V6C18 6.55228 17.5523 7 17 7H14C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5H16V3C16 2.44772 16.4477 2 17 2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 16C0.447715 16 0 15.5523 0 15V12C0 11.4477 0.447715 11 1 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2V15C2 15.5523 1.55228 16 1 16Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16201 0.0391048C9.81613 -0.115589 11.4808 0.190586 12.9716 0.923718C14.4625 1.65685 15.7213 2.78833 16.6087 4.19283C16.9036 4.65973 16.7643 5.27737 16.2974 5.57236C15.8305 5.86736 15.2128 5.72799 14.9178 5.26109C14.2277 4.1687 13.2486 3.28866 12.0891 2.71845C10.9295 2.14823 9.63478 1.9101 8.34824 2.03042C7.06169 2.15073 5.83356 2.62481 4.79986 3.40013C3.76616 4.17546 2.96723 5.22178 2.49157 6.4232C2.28827 6.9367 1.70718 7.18817 1.19368 6.98486C0.680172 6.78156 0.428706 6.20047 0.63201 5.68696C1.24358 4.14228 2.27077 2.79702 3.59981 1.80017C4.92885 0.803323 6.50788 0.193799 8.16201 0.0391048Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83799 17.9609C8.18387 18.1156 6.5192 17.8094 5.02837 17.0763C3.53754 16.3431 2.27872 15.2117 1.39135 13.8072C1.09636 13.3403 1.23572 12.7226 1.70262 12.4276C2.16952 12.1326 2.78716 12.272 3.08215 12.7389C3.77233 13.8313 4.75141 14.7113 5.91095 15.2816C7.07048 15.8518 8.36522 16.0899 9.65176 15.9696C10.9383 15.8493 12.1664 15.3752 13.2001 14.5999C14.2338 13.8245 15.0328 12.7782 15.5084 11.5768C15.7117 11.0633 16.2928 10.8118 16.8063 11.0151C17.3198 11.2184 17.5713 11.7995 17.368 12.313C16.7564 13.8577 15.7292 15.203 14.4002 16.1998C13.0711 17.1967 11.4921 17.8062 9.83799 17.9609Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9453 5.54295C6.58555 5.11611 7.47538 5 8.5 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H8.5C7.52462 7 7.16445 7.13389 7.0547 7.20705C7.03426 7.22067 7.03361 7.22365 7.03297 7.22658C7.03285 7.22715 7.03272 7.22772 7.03245 7.22837C7.02311 7.2508 7 7.32539 7 7.5C7 7.65149 7.01759 7.7156 7.02407 7.734C7.02962 7.73847 7.04039 7.74633 7.05864 7.75676C7.24508 7.8633 7.75279 8 9 8C10.2528 8 11.2451 8.1133 11.9336 8.50676C12.3184 8.72663 12.6117 9.03408 12.7919 9.4271C12.9615 9.79718 13 10.1769 13 10.5C13 10.8231 12.9615 11.2028 12.7919 11.5729C12.6117 11.9659 12.3184 12.2734 11.9336 12.4932C11.2451 12.8867 10.2528 13 9 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H9C10.2472 11 10.7549 10.8633 10.9414 10.7568C10.9596 10.7463 10.9704 10.7385 10.9759 10.734C10.9824 10.7156 11 10.6515 11 10.5C11 10.3485 10.9824 10.2844 10.9759 10.266C10.9704 10.2615 10.9596 10.2537 10.9414 10.2432C10.7549 10.1367 10.2472 10 9 10C7.74721 10 6.75492 9.8867 6.06636 9.49324C5.68159 9.27337 5.38825 8.96592 5.20812 8.5729C5.0385 8.20282 5 7.82305 5 7.5C5 6.82469 5.18169 6.05202 5.9453 5.54295Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C9.55228 4 10 4.44772 10 5V13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13V5C8 4.44772 8.44772 4 9 4Z" fill="currentColor"/>
        </svg>
    )
}

export function Tasks(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25671 9.83104C4.62617 9.42053 5.25846 9.38725 5.66897 9.75671L6.66668 10.6546L9.33104 8.25671C9.74155 7.88725 10.3738 7.92053 10.7433 8.33103C11.1128 8.74154 11.0795 9.37384 10.669 9.74329L7.33564 12.7433C6.95533 13.0856 6.37802 13.0856 5.99771 12.7433L4.33104 11.2433C3.92053 10.8738 3.88726 10.2415 4.25671 9.83104Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 18C14.1046 18 15 17.1046 15 16L15 5C15 3.89543 14.1046 3 13 3L2 3C0.89543 3 -3.37144e-07 3.89543 -3.85426e-07 5L-8.66252e-07 16C-9.14534e-07 17.1046 0.89543 18 2 18L13 18ZM13 5L13 16L2 16L2 5L13 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C17.5523 14 18 13.5523 18 13L18 2C18 0.895431 17.1046 -3.91405e-08 16 -8.74228e-08L5 3.85426e-07C4.44771 3.61285e-07 4 0.447716 4 1C4 1.55229 4.44772 2 5 2L16 2L16 13C16 13.5523 16.4477 14 17 14Z" fill="currentColor"/>
        </svg>
    )
}

export function Watch(){
    return (
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 9.35126 12.8157 9.67677 12.5145 9.85749L7.5145 12.8575C7.20557 13.0429 6.82081 13.0477 6.5073 12.8702C6.19379 12.6927 6 12.3603 6 12L6 6C6 5.63973 6.19379 5.30731 6.5073 5.1298C6.82081 4.95229 7.20557 4.95715 7.5145 5.14251L12.5145 8.14251C12.8157 8.32323 13 8.64874 13 9ZM8 7.76619L8 10.2338L10.0563 9L8 7.76619Z" fill="currentColor"/>
        </svg>
    )
}

const Icon = ({
                    label,
              }: IconProps) => {
    switch (label){
        case "accounts":
            return <Accounts />
        case "activity":
            return <Activity />
        case "alerts":
            return <Alerts/>
        case "cameras":
            return <Cameras />
        case "channels":
            return <Channels />
        case "counting":
            return <Counting />
        case "dashboard":
            return <Dashboard />
        case "logout":
            return <Logout />
        case "media":
            return <Media />
        case "livestream":
            return <Livestream />
        case "share":
            return <Share />
        case "sites":
            return <Sites />
        case "subscription":
            return <Subscription />
        case "tasks":
            return <Tasks />
        case "watch":
            return <Watch />
    }
    return <span></span>;
};

export default Icon