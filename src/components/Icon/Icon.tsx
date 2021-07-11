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
    return (
        <svg className={"icon"} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29445 6.02998C2.81864 6.66746 3.56762 7.48473 4.49387 8.21451C5.77466 9.22361 7.31052 10 9 10C10.6895 10 12.2253 9.22361 13.5061 8.21451C14.4324 7.48473 15.1814 6.66746 15.7056 6.02998C15.1284 5.36327 14.376 4.53145 13.4378 3.78087C12.1769 2.77214 10.6847 2 9 2C7.31533 2 5.8231 2.77214 4.5622 3.78087C3.62398 4.53145 2.87162 5.36327 2.29445 6.02998ZM3.31281 2.21913C4.76023 1.06119 6.68467 0 9 0C11.3153 0 13.2398 1.06119 14.6872 2.21913C15.9277 3.21153 16.8946 4.34108 17.4915 5.03844C17.5884 5.15166 17.6756 5.25349 17.7526 5.3415C18.0637 5.69711 18.0835 6.22198 17.8 6.6C17.2791 7.29447 16.2185 8.6237 14.7439 9.78549C13.2747 10.9431 11.3105 12 9 12C6.68949 12 4.72534 10.9431 3.25613 9.78549C1.78156 8.6237 0.720858 7.29447 0.200002 6.6C-0.0835117 6.22198 -0.0637332 5.69711 0.247426 5.3415C0.324428 5.25349 0.411595 5.15166 0.508515 5.03843C1.10545 4.34107 2.07232 3.21152 3.31281 2.21913Z" fill="#A69D9D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6 6C6 4.34315 7.34315 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9C7.34315 9 6 7.65685 6 6Z" fill="#A69D9D"/>
        </svg>
    )
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

export function Cloud(){
    return (<svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.8843 5C5.81855 5 4.12306 6.61291 3.95576 8.66459L3.89801 9.37283L3.21984 9.55041C2.52063 9.7335 1.97107 10.4101 1.97107 11.25C1.97107 12.2457 2.73484 13 3.61364 13L3.62312 13L3.6288 12.9999L7.8673 13L7.8843 13L7.9013 13L7.90539 12.9999L13.2412 13L13.25 13C14.6126 13 15.7686 11.8353 15.7686 10.3333C15.7686 8.83132 14.6126 7.66664 13.25 7.66664C13.0174 7.66664 12.7936 7.69976 12.5818 7.7613L11.7891 7.99158L11.4258 7.24051C10.783 5.91143 9.4376 5 7.8843 5ZM2.07896 7.854C2.60645 5.08806 5.00462 3 7.8843 3C9.94489 3 11.7579 4.06955 12.8157 5.68827C12.9588 5.67396 13.1037 5.66664 13.25 5.66664C15.758 5.66664 17.7397 7.78521 17.7397 10.3333C17.7397 12.8814 15.758 15 13.25 15L13.2378 15H7.90543L7.8843 15L7.86321 15H3.62895L3.61364 15C1.58951 15 0 13.2918 0 11.25C0 9.76155 0.840048 8.45714 2.07896 7.854Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54775 4.04634C5.73804 3.22094 7.1845 2.86521 8.61514 3.04603C10.0458 3.22685 11.362 3.93177 12.3164 5.02823C13.2707 6.1247 13.7974 7.53716 13.7974 9.00001C13.7974 9.5523 13.3562 10 12.8119 10C12.2676 10 11.8264 9.5523 11.8264 9.00001C11.8264 8.02478 11.4752 7.08314 10.839 6.35216C10.2028 5.62119 9.32526 5.15124 8.3715 5.03069C7.41774 4.91014 6.45343 5.1473 5.65991 5.69756C4.86638 6.24783 4.29832 7.07329 4.06253 8.01873C3.929 8.55414 3.393 8.87834 2.86534 8.74285C2.33767 8.60736 2.01816 8.06349 2.15169 7.52808C2.50537 6.10993 3.35747 4.87174 4.54775 4.04634Z" fill="currentColor"/>
    </svg>)
}

export function Refresh(){
    return (<svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 0C17.5523 0 18 0.447715 18 1V6C18 6.55228 17.5523 7 17 7H12C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5H16V1C16 0.447715 16.4477 0 17 0Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32589 0.406451C8.21762 -0.182214 10.2507 -0.130216 12.1099 0.55438C13.9691 1.23898 15.5504 2.51791 16.6086 4.19283C16.9036 4.65973 16.7643 5.27737 16.2973 5.57236C15.8304 5.86735 15.2128 5.72799 14.9178 5.26109C14.0948 3.95837 12.8648 2.96365 11.4188 2.43118C9.97279 1.89872 8.39148 1.85828 6.92013 2.31613C5.44879 2.77398 4.16963 3.70453 3.28105 4.96347C2.39247 6.22241 1.94413 7.73937 2.00557 9.27909C2.06701 10.8188 2.63478 12.2952 3.62084 13.4794C4.6069 14.6635 5.95614 15.4892 7.45929 15.8283C8.96244 16.1675 10.5355 16.0012 11.9345 15.3552C13.3335 14.7092 14.4803 13.6197 15.1969 12.2555C15.4538 11.7666 16.0583 11.5785 16.5473 11.8353C17.0362 12.0922 17.2243 12.6968 16.9674 13.1857C16.046 14.9396 14.5716 16.3404 12.7729 17.171C10.9742 18.0015 8.9517 18.2154 7.01908 17.7793C5.08646 17.3432 3.35173 16.2816 2.08394 14.7592C0.816148 13.2367 0.0861489 11.3385 0.00715934 9.35883C-0.0718302 7.37919 0.504605 5.42881 1.64706 3.81018C2.78952 2.19154 4.43415 0.995116 6.32589 0.406451Z" fill="currentColor"/>
        </svg>
    )
}

export function User(){
    return (<svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6C10.1046 6 11 5.10457 11 4C11 2.89543 10.1046 2 9 2ZM5 4C5 1.79086 6.79086 0 9 0C11.2091 0 13 1.79086 13 4C13 6.20914 11.2091 8 9 8C6.79086 8 5 6.20914 5 4Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9981 11.3995C5.29471 9.88675 7.08937 9 9 9C10.9106 9 12.7053 9.88675 14.0019 11.3995C15.2944 12.9074 16 14.9238 16 17C16 17.5523 15.5523 18 15 18L3 18C2.44772 18 2 17.5523 2 17C2 14.9238 2.70558 12.9074 3.9981 11.3995ZM9 11C7.72803 11 6.47044 11.5882 5.51662 12.701C4.75666 13.5877 4.24797 14.743 4.07017 16L13.9298 16C13.752 14.743 13.2433 13.5877 12.4834 12.701C11.5296 11.5882 10.272 11 9 11Z" fill="currentColor"/>
        </svg>
    )
}

export function Forward(){
    return (<svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L11.7071 8.29289C12.0976 8.68342 12.0976 9.31658 11.7071 9.70711L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L9.58579 9L5.29289 4.70711C4.90237 4.31658 4.90237 3.68342 5.29289 3.29289Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L15.5858 9L11.2929 4.70711C10.9024 4.31658 10.9024 3.68342 11.2929 3.29289Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12 8.44772 11.5523 8 11 8H1C0.447715 8 0 8.44772 0 9C0 9.55228 0.447715 10 1 10H11C11.5523 10 12 9.55228 12 9Z" fill="currentColor"/>
        </svg>
    )
}

export function ToggleOff(){
    return(
        <svg className={"icon"} width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" width="32" height="18" rx="9" fill="#6D6666"/>
            <circle cx="9" cy="9" r="5" fill="#6D6666"/>
        </svg>
    )
}

export function AlertsNotify() {
    return(
        <svg className={"icon"} width="94" height="104" viewBox="0 0 94 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd)">
            <circle cx="52" cy="48" r="18" fill="#FBFBFB"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 43C49.7909 43 48 44.7909 48 47V51H56V47C56 44.7909 54.2091 43 52 43ZM46 47C46 43.6863 48.6863 41 52 41C55.3137 41 58 43.6863 58 47V53H46V47Z" fill="#6D6666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2321 54.1339C54.7104 54.41 54.8743 55.0216 54.5981 55.4999C54.3348 55.956 53.9561 56.3347 53.5 56.598C53.044 56.8613 52.5267 56.9999 52 56.9999C51.4734 56.9999 50.9561 56.8613 50.5 56.598C50.044 56.3347 49.6653 55.956 49.402 55.4999C49.1258 55.0216 49.2897 54.41 49.768 54.1339C50.2463 53.8578 50.8579 54.0216 51.134 54.4999C51.2218 54.6519 51.348 54.7782 51.5 54.8659C51.6521 54.9537 51.8245 54.9999 52 54.9999C52.1756 54.9999 52.348 54.9537 52.5 54.8659C52.6521 54.7782 52.7783 54.6519 52.8661 54.4999C53.1422 54.0216 53.7538 53.8578 54.2321 54.1339Z" fill="#6D6666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45 52C45 51.4477 45.4477 51 46 51H58C58.5523 51 59 51.4477 59 52C59 52.5523 58.5523 53 58 53H46C45.4477 53 45 52.5523 45 52Z" fill="#6D6666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 39C52.5523 39 53 39.4477 53 40V41C53 41.5523 52.5523 42 52 42C51.4477 42 51 41.5523 51 41V40C51 39.4477 51.4477 39 52 39Z" fill="#6D6666"/>
            <circle cx="65" cy="34" r="4" fill="#84559F"/>
            <circle opacity="0.14" cx="65" cy="34" r="7" stroke="#84559F" stroke-width="2"/>
            <defs>
            <filter id="filter0_dd" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="3"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="17"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    )
}

export function  Bookmark() {
    return(
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H7C7.26522 0 7.51957 0.105357 7.70711 0.292893L17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071L0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7V1ZM2 2V6.58579L11 15.5858L15.5858 11L6.58579 2H2Z" fill="#A69D9D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5ZM4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z" fill="#A69D9D"/>
        </svg>
    )
    
}

export function Star() {
    return(
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8.12698 1.96867C8.48439 1.19379 9.58568 1.19379 9.94309 1.96866L11.4809 5.30259C11.6266 5.6184 11.9258 5.83584 12.2712 5.87679L15.9172 6.30908C16.7646 6.40955 17.1049 7.45693 16.4784 8.0363L13.7828 10.5291C13.5275 10.7652 13.4132 11.117 13.4809 11.4581L14.1965 15.0592C14.3628 15.8962 13.4718 16.5435 12.7272 16.1267L9.52348 14.3334C9.22001 14.1635 8.85007 14.1635 8.54659 14.3334L5.34286 16.1267C4.59825 16.5435 3.70729 15.8962 3.8736 15.0592L4.58913 11.4581C4.65691 11.117 4.54259 10.7652 4.28726 10.5291L1.59171 8.0363C0.965207 7.45693 1.30552 6.40955 2.15292 6.30908L5.79887 5.87679C6.14424 5.83584 6.44352 5.6184 6.58919 5.30259L8.12698 1.96867Z" stroke="#A69D9D" stroke-width="2"/>
        </svg>
    )    
}

export function  Checkbox() {
    return(
        <svg className={"icon"} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x="1" y="1" width="12" height="12" rx="1" stroke="#84559F" stroke-width="2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 6.29289C3.68342 5.90237 4.31658 5.90237 4.70711 6.29289L6 7.58579L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L6.70711 9.70711C6.31658 10.0976 5.68342 10.0976 5.29289 9.70711L3.29289 7.70711C2.90237 7.31658 2.90237 6.68342 3.29289 6.29289Z" fill="#84559F"/>
        </svg>

    )
    
}

export function Sort() {
    return(
        <svg className={"icon"} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="2" rx="1" fill="#A69D9D"/>
            <rect x="4" y="4" width="14" height="2" rx="1" fill="#A69D9D"/>
            <rect x="8" y="8" width="10" height="2" rx="1" fill="#A69D9D"/>
            <rect x="12" y="12" width="6" height="2" rx="1" fill="#A69D9D"/>
        </svg>
    )
    
}

export function Plus() {
    return(
        <svg className={"icon"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13C9.55228 13 10 12.5523 10 12V6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6V12C8 12.5523 8.44772 13 9 13Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8L6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10L12 10C12.5523 10 13 9.55228 13 9Z" fill="white"/>
            </g>
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
        case "cloud":
            return <Cloud />
        case "dashboard":
            return <Dashboard />
        case "forward":
            return <Forward />
        case "logout":
            return <Logout />
        case "media":
            return <Media />
        case "livestream":
            return <Livestream />
        case "refresh":
            return <Refresh />
        case "share":
            return <Share />
        case "sites":
            return <Sites />
        case "subscription":
            return <Subscription />
        case "tasks":
            return <Tasks />
        case "user":
            return <User />
        case "watch":
            return <Watch />
        case "toggle-off":
            return <ToggleOff />
        case "alerts-notify":
            return <AlertsNotify/>
        case "bookmark":
            return <Bookmark/>
        case "star":
            return <Star/>
        case "checkbox":
            return <Checkbox/>
        case "sort":
            return <Sort/>
        case "plus-circle":
            return <Plus/>
    }
    return <span></span>;
};

export default Icon
